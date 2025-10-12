---
layout: post
author: dragos
title: Polyglot Pirates Wanted
tag: game
---

<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

We are looking for help from people interested to translate words for our upcoming game, **Polyglot Pirates**, a language learning game about pirates traveling the seas in exchance for **Name Credits**.

1. [Translations](#2-translations)
    - [Words](#words)
2. [Gameplay](#1-gameplay)
    - [Select Language](#select-language)
    - [Gameplay - Word match](#gameplay---word-match)
    - [Gameplay - Hangman](#gameplay---hangman)
    - [Gameplay - Letter Square](#gameplay---letter-square)

# 1. Translations

For start, we will focus on few languages:
- Spanish, German, French, Russian, Chinese, Romanian.

Out of the 30 that there will be in total:
```
"ar","bg","cs","da","de","el","es","fi","fr","hu","id","it","ja","ko",
"nl","no","nn","nb","pl","pt","ro","ru","sv","th","tr","uk","vi","zh",
"cmn","yue","wuu","nan","hak"
```

As well as a total of 1000 easy to use words (eg.):

|about|adv|
|-|-|
|above|adv|
|action|noun|
|activity|noun|
|actor|noun|
|actress|noun|

If you want to help, join our [Discord](https://discord.com/invite/56dMud8HYn), select the roles according to the languages you speak, and contribute to the Polyglot Dictionaries. 

The `words_lang.csv` file (where lang will the be language you know) contains translations from english. There are 1000 english words translated. Example of translations:

|word|part_of_speech|english_word|sense|
|-|-|-|-|
|vineri|noun|Friday|day of the week|
|luni|noun|Monday|day of the week|
|sâmbătă|noun|Saturday|day of the week|

The ask is to go through the translations and make sure they are correct. Some words in english will be translated to multiple words in the selected language and some will be wrong. Remove those rows. Example:

|word|part_of_speech|english_word|sense|
|-|-|-|-|
|actor|noun|actor|person who performs in a theatrical play or film — see also actress|
|actriță|noun|actor|person who performs in a theatrical play or film — see also actress|
|făcător|noun|actor|one who acts; a doer|
|făcătoare|noun|actor|one who acts; a doer|
|participant|noun|actor|one who takes part in a situation|
|participantă|noun|actor|one who takes part in a situation|

The first column is the word translated. The second column is the part of speech. The third column is the original word from english. The forth is the sense.

In case there are multiple translations, the same original word in english will appear in the third column. Eg. in the above translations for actor (in Romanian) only the first one is correct:

|word|part_of_speech|english_word|sense|
|-|-|-|-|
|actor|noun|actor|person who performs in a theatrical play or film — see also actress|

Rules to use when removing words:
- Only keep one gender.
- Only keep the main sense. (In case there are 2 senses or more, you can keep them only if the translation from english -> translated_language and translated_language -> english hold true)

All of the public data as well as the words will be located in the [Polyglot Dictionaries](https://github.com/appsinacup/polyglot-dictionaries), a free and open source repository you can contribute to.

## Words

The words will come from [wiktionary.en](https://www.wiktionary.org), the free Dictionary.

We take about 1000 basic words to form a basic dictionary, and take translations from Wiktionary (some of the translations are bad and need to be removed):

| Code | Language | Link |
|------|-----------|------|
| ar | Arabic | [words_ar.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_ar.csv) |
| bg | Bulgarian | [words_bg.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_bg.csv) |
| cs | Czech | [words_cs.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_cs.csv) |
| da | Danish | [words_da.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_da.csv) |
| de | German | [words_de.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_de.csv) |
| el | Greek | [words_el.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_el.csv) |
| es | Spanish | [words_es.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_es.csv) |
| fi | Finnish | [words_fi.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_fi.csv) |
| fr | French | [words_fr.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_fr.csv) |
| hu | Hungarian | [words_hu.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_hu.csv) |
| id | Indonesian | [words_id.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_id.csv) |
| it | Italian | [words_it.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_it.csv) |
| ja | Japanese | [words_ja.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_ja.csv) |
| ko | Korean | [words_ko.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_ko.csv) |
| nl | Dutch | [words_nl.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_nl.csv) |
| no | Norwegian (generic) | [words_no.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_no.csv) |
| nn | Norwegian Nynorsk | [words_nn.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_nn.csv) |
| nb | Norwegian Bokmål | [words_nb.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_nb.csv) |
| pl | Polish | [words_pl.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_pl.csv) |
| pt | Portuguese | [words_pt.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_pt.csv) |
| ro | Romanian | [words_ro.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_ro.csv) |
| ru | Russian | [words_ru.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_ru.csv) |
| sv | Swedish | [words_sv.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_sv.csv) |
| th | Thai | [words_th.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_th.csv) |
| tr | Turkish | [words_tr.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_tr.csv) |
| uk | Ukrainian | [words_uk.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_uk.csv) |
| vi | Vietnamese | [words_vi.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_vi.csv) |
| zh | Chinese (generic) | [words_zh.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_zh.csv) |
| cmn | Chinese (Mandarin) | [words_cmn.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_cmn.csv) |
| yue | Chinese (Cantonese) | [words_yue.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_yue.csv) |
| wuu | Chinese (Wu) | [words_wuu.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_wuu.csv) |
| nan | Chinese (Min Nan / Hokkien) | [words_nan.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_nan.csv) |
| hak | Chinese (Hakka) | [words_hak.csv](https://github.com/appsinacup/polyglot-dictionaries/blob/main/1000_words/words_hak.csv) |

# 2. Gameplay


## Select Language

When the game starts, you will be able to set your base language and the language you want to learn:

<image style="width: 100%;" src="/assets/img/polyglot/language_select.png">
</image>

## Gameplay - Word match

This is an older prototype of word match - Match words to have the player move or attack in the game:

<img controls loop autoplay muted style="width: 100%;" src="/assets/img/polyglot/gameplay-navigate.gif"/>

## Gameplay - Hangman

Guess letter by letter from base language to target language. You can make mistakes, but if you make too many, you will have to wait until you can guess again. Every word you complete moves the ship or attacks in the game:

<img controls loop autoplay muted style="width: 100%;" src="/assets/img/polyglot/hangman.gif"/>

## Gameplay - Letter Square

Find words inside a square of letters. After a while, you will get hints (this is WIP):

<image style="width: 100%;" src="/assets/img/polyglot/letter_square.png">
</image>
