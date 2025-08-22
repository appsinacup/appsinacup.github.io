const { gsap, gsap: { to, set } } = window;
gsap.ticker.fps(60)


normalSpeed()

// --- Click tip helpers (global) ---
function ensureClickTip() {
  let el = document.getElementById('clickTip');
  if (!el) {
    el = document.createElement('div');
    el.id = 'clickTip';
    document.body.appendChild(el);
  }
  return el;
}
function showClickTip() {
  const el = ensureClickTip();
  el.classList.add('visible');
}
function hideClickTip() {
  const el = document.getElementById('clickTip');
  if (el) el.classList.remove('visible');
}
function setSpeed(scale) {
  gsap.globalTimeline.timeScale(scale);
}
function normalSpeed() { setSpeed(2); }

function createPages(pages, bookPrefix, book, startIndex = 1) {
  for (let i = 0; i < pages; i++) {
    const page = document.createElement("div")
    page.classList.add("page", "book__page", `book__page__${bookPrefix}`)
    page.style = `--page-index: ${i + 2};`
    const page1 = document.createElement("div")
    page1.classList.add("page__half", "page__half--front")
    const pageNumberElement1 = document.createElement("div")
    const pageNumberElement2 = document.createElement("div")
    let pageNumber1 = i * 2 + startIndex
    let pageNumber2 = i * 2 + startIndex + 1
    pageNumberElement1.innerText = pageNumber1
    if (pageNumber1 == 1) {
    pageNumberElement1.innerHTML = "#" + pageNumber1
    } else {
    pageNumberElement1.innerHTML = "#" + pageNumber1
    }
    pageNumberElement1.classList.add("page-number-right")
    pageNumberElement2.innerText = pageNumber2
    pageNumberElement2.innerHTML = "#" + pageNumber2
    pageNumberElement2.classList.add("page-number-left")
    page1.appendChild(pageNumberElement1)
    const page2 = document.createElement("div")
    page2.classList.add("page__half", "page__half--back")

    const page1Image = document.createElement("img")
    // Prefer images under /assets/img/pages, fallback to /assets/img/pages/aug if missing
    const idx1 = i * 2 + startIndex;
    page1Image.src = `/assets/img/pages/aug/${bookPrefix}-${idx1}.jpg`;
    page1Image.loading = "lazy"
    page1Image.decoding = "async"
    page1Image.height = "1024"

    page1.appendChild(page1Image)

    const page2Image = document.createElement("img")
    const idx2 = i * 2 + startIndex + 1;
    page2Image.src = `/assets/img/pages/aug/${bookPrefix}-${idx2}.jpg`;
    page2Image.loading = "lazy"
    page1Image.decoding = "async"
    page1Image.height = "1024"
    page2.appendChild(page2Image)
    page2.appendChild(pageNumberElement2)

    page.appendChild(page1)
    page.appendChild(page2)
    book.appendChild(page)
  }
}

function createBookEnd(pages, book, bookPrefix) {
  const pageEnd = document.createElement("div")
  pageEnd.classList.add("page", "book__page", `book__page__${bookPrefix}`, "book__cover", "book__cover--back")
  pageEnd.style = `--page-index: ${pages + 2};`
  const backCover = document.createElement("div")
  backCover.classList.add("page__half", "page__half--back")
  pageEnd.appendChild(backCover)
  book.appendChild(pageEnd)
}

function createBook(year, pages, startIndex, onComplete, endPos) {

  const book = document.getElementById(`book-${year}`)
  createPages(pages, year, book, startIndex)
  createBookEnd(pages, book, year)
  const PAGES = [...document.querySelectorAll(`.book__page__${year}`)];
  const pageCount = PAGES.length - 1;
  const state = { current: 0, isFlipping: false, currentTween: null, currentDir: null, queueNext: 0, queuePrev: 0 };

  function updatePageCount(pageCount) {
    const sheet = document.createElement('style')
    sheet.innerHTML = `
    :root {
      --page-count: ${pageCount + 3};
    }
    `;
    document.body.appendChild(sheet);
  }


  updatePageCount(pageCount)

  function initialZoom() {
    to(`.book-${year}`, {
      duration: 1,
      force3D: true,
      transform: "translate(0, -50%) scale(1)"
    });
  }

  function showFlipIndicator(msg) {
    let el = document.getElementById('flipIndicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'flipIndicator';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('visible');
    setTimeout(() => el.classList.remove('visible'), 600);
  }

  function speedUpCurrentTween() {
    if (state.currentTween) {
      // Multiply current tween speed, cap at 12x
      const current = state.currentTween.timeScale ? state.currentTween.timeScale() : 1;
      const next = Math.min((current || 1) * 1.8, 12);
      if (state.currentTween.timeScale) state.currentTween.timeScale(8);
    }
  }

  // Flip one page forward
  function flipNext() {
  if (state.isFlipping) { speedUpCurrentTween(); state.queueNext++; return true; }
  const index = state.current;
  // Allow flipping the back cover as the final step
  if (index > pageCount) return false;
    const page = PAGES[index];
    state.isFlipping = true;
    state.currentDir = 'next';
    
    // Simple fix: push back cover behind during first flip
    if (index === 0) {
      const backCover = PAGES[pageCount];
      //set(backCover, { z: -2, x: 0 });
    }else
    // Simple fix during last flip: ensure back cover is above all others
    if (index === pageCount) {
      const backCover = PAGES[pageCount];
      set(backCover, { z: 2 });
    }
    
    state.currentTween = to(page, {
      rotateY: `-=${180 - index * 0.3}`,
      ease: 'circle',
      duration: 1.2,
      onComplete: () => {
        state.current++;
        state.isFlipping = false;
        state.currentTween = null;
        state.currentDir = null;
        
        const backCover = PAGES[pageCount];
        if (index === pageCount) {
          //set(backCover, { z: 2, x: 10 });
        } else {
          set(backCover, { z: 0, x: 0 });
        }
        
        showFlipIndicator('Flip ➡');
        if (state.queueNext > 0) { state.queueNext--; flipNext(); return; }
        if (state.queuePrev > 0) { state.queuePrev--; flipPrev(); return; }
      }
    });
    return true;
  }

  // Flip one page backward
  function flipPrev() {
    if (state.isFlipping) { speedUpCurrentTween(); state.queuePrev++; return true; }
    if (state.current <= 0) return false;
    const index = state.current - 1;
    const page = PAGES[index];
    state.isFlipping = true;
    state.currentDir = 'prev';
    // Ensure this page renders above all others during the return flip
    set(page, { zIndex: 20000, z: pageCount * 3 + 2 });
    state.currentTween = to(page, {
      rotateY: 0,
      // Keep it visually above while animating back
      z: pageCount * 3 + 2,
      ease: 'circle',
      duration: 1.0,
      onComplete: () => {
        state.current--;
        state.isFlipping = false;
        state.currentTween = null;
        state.currentDir = null;
        // Restore stacking to CSS-driven defaults
        set(page, { zIndex: '', z: 0 });
        showFlipIndicator('Flip ⬅');
        if (state.queuePrev > 0) { state.queuePrev--; flipPrev(); return; }
        if (state.queueNext > 0) { state.queueNext--; flipNext(); return; }
      }
    });
    return true;
  }

  return {
    PAGES,
    get isFlipping() { return state.isFlipping; },
    get current() { return state.current; },
    flipNext,
    flipPrev,
  startAnimation: () => { initialZoom(); showClickTip(); }
  }
}
let firstBook = null
const book1 = createBook(1, 9, 1, () => {}, "translate(-190%, -50%) scale(0.5)")
firstBook = book1
firstBook.startAnimation();

function handleGlobalClick(e) {
  hideClickTip();
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const clientX = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX);
  if (clientX < vw / 2) {
    if (firstBook && firstBook.flipPrev) firstBook.flipPrev();
  } else {
    if (firstBook && firstBook.flipNext) firstBook.flipNext();
  }
}
window.addEventListener('click', handleGlobalClick, { passive: true });
window.addEventListener('touchstart', handleGlobalClick, { passive: true });

// Keyboard support: ArrowLeft = previous, ArrowRight = next
window.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'ArrowLeft') {
    e.preventDefault();
    if (firstBook && firstBook.flipPrev) firstBook.flipPrev();
  } else if (key === 'ArrowRight') {
    e.preventDefault();
    if (firstBook && firstBook.flipNext) firstBook.flipNext();
  }
});

