---
layout: post
author: dragos
title: Balaur - A Deterministic 2D and 3D Game Engine in Rust
tag: engine
description: Balaur is an open source 2D and 3D game engine written in Rust - Rune scripts that hot reload in milliseconds, bit-exact determinism with record and replay, and a built-in editor.
image: /assets/img/balaur/social.png
---

![The Balaur editor: node tree, viewport, inspector and the Output dock](/assets/img/balaur/editor_overview.webp)

I have been building a **game engine in Rust** together with **Sébastien Crozet**, the author of [Rapier](https://rapier.rs) (the physics engine behind [Godot Rapier Physics](https://github.com/appsinacup/godot-rapier-physics)). It's called **Balaur**: **2D and 3D**, **MIT**, open source.

- **Website**: [balaurengine.org](https://balaurengine.org/)
- **GitHub**: [balaurengine/balaur](https://github.com/balaurengine/balaur)
- **Docs**: [Introduction](https://balaurengine.org/docs/intro/) · [Features](https://balaurengine.org/features/) · [Roadmap](https://balaurengine.org/docs/roadmap/)

Contents:

1. [Why another engine](#why-another-engine)
2. [Hot reload in milliseconds](#hot-reload-in-milliseconds)
3. [Determinism, always on](#determinism-always-on)
4. [Scenes are TOML](#scenes-are-toml)
5. [What is in the engine today](#what-is-in-the-engine-today)
6. [The editor is a Balaur project](#the-editor-is-a-balaur-project)
7. [Ship as one file](#ship-as-one-file)
8. [Built on the Rust ecosystem](#built-on-the-rust-ecosystem)
9. [Try it](#try-it)

## Why another engine

Three things I kept hitting while fixing bugs in Godot:

- **Determinism**. Rollback netcode, lockstep multiplayer, replays, reproducible bug reports. Same inputs have to give the same bits on every machine. Hard to add to an engine later.
- **Fixing things myself**. In a big engine a fix waits on review, a merge and the next release. I wanted to fix a bug and ship with it the same day.
- **Shipping small**. One executable, no sources, no compiler inside. On the web, Godot 4.7's export template is **38.8 MB** of wasm (10.1 MB gzip, 6.9 MB brotli) before the game's own data. Balaur's headless web build is **13.6 MB** (4.6 MB gzip, 3.1 MB brotli); with the renderer, my estimate is 4-5 MB brotli.

So I am making my own. On top: a scene tree of named nodes with scripts, like in Godot. Underneath: every node is an ECS entity and every subsystem is a plugin. Only plugin authors see that layer.

It is **0.1.0**: builds from source, no binary release yet. The [comparison page](https://balaurengine.org/compare/) says when to pick Godot, Bevy or Fyrox instead.

## Hot reload in milliseconds

Save a script while the game runs. New code is live in **milliseconds**, state survives.

![A value changed and saved while the scene runs, then a breakpoint stepped in the Debugger dock](/assets/img/balaur/scripting_live.webp)

Scripts are [Rune](https://rune-rs.github.io/): Rust syntax without the types, `async`/`await`, no build step.

```rust
// scripts/spinner.rn
pub fn init(this) { this.angle = 0.0; }

pub fn update(this, dt) {
    this.angle += dt;
    this.node.set_rotation_euler(0.0, this.angle, 0.0);
}
```

- A script that does not compile shows **file, line and caret** in the editor. The running code stays up.
- **Debugger**: breakpoints in the gutter, `F5` / `F10` / `F11` / `Shift+F11`, frames and locals. The game freezes, the editor stays live.
- No Rust needed to make a game. Scenes are TOML, game code is Rune. Rust or C is for plugins.

More in [Scripting](https://balaurengine.org/docs/manual/scripting/).

## Determinism, always on

Simulation runs in `fixed_update(dt)` at **60 Hz**. Every tick hashes the world into a digest.

<video controls loop autoplay muted playsinline style="width: 100%;">
    <source type="video/webm" src="/assets/vid/balaur/determinism_replay.webm">
    <source type="video/mp4" src="/assets/vid/balaur/determinism_replay.mp4">
</video>

```bash
balaur run my-game --fixed-tick --record session.blr
balaur replay session.blr --verify          # stops at the first tick that disagrees
```

- A recording stores **input, not state**. Minutes of play is kilobytes.
- CI compares digests across **three operating systems**. A change that alters a digest without saying why does not merge.
- Rapier runs with `enhanced-determinism`, [libm](https://github.com/rust-lang/libm) does the transcendentals, Rune is [forked](https://github.com/balaurengine/rune/tree/deterministic-pow) so `powf` / `powi` match everywhere.
- Network replies land at the start of a tick, in order. A replay covers logins and retries **without touching the network**.

This is what lockstep and rollback multiplayer need. Details in [Determinism](https://balaurengine.org/docs/manual/determinism/).

## Scenes are TOML

```toml
[[nodes]]
name = "Ball"
position = [0.0, 6.0, 0.0]
script = "scripts/ball.rn"
body3d = "dynamic"
collider3d = { kind = "ball", radius = 0.5 }
shape3d = { kind = "ball", radius = 0.5 }
```

`body3d`, `collider3d` and `shape3d` are **components** from the physics and render plugins. One registration = scene key + script call + inspector row. See [Scenes and nodes](https://balaurengine.org/docs/manual/scenes/).

## What is in the engine today

**Physics** - 2D and 3D through [Rapier](https://rapier.rs), fixed 60 Hz step, collider and centre-of-mass overlays in the editor.

![Collider and centre-of-mass overlays over an example scene](/assets/img/balaur/physics_overlays.webp)

**Rendering** - 2D and 3D on [wgpu](https://wgpu.rs): sprites, tile maps, particles, meshes. 2D lights and occluders build a light map, post-processing on top.

![2D lights and occluders casting shadows across a scene](/assets/img/balaur/rendering_lights2d.webp)

**Animation** - clips, tweens, twelve easings, method tracks. 2D bones with skinned polygons, 3D rigs from glTF, `look_at` and `two_bone_ik`.

![The Animate persona: the rig's bones in the tree, a bone selected in the viewport, and the timeline with its keys](/assets/img/balaur/persona_animate.webp)

![An imported 3D rig and its bones in the editor](/assets/img/balaur/example_rig3d.webp)

**Shaders** - WESL (WGSL with imports and variants) in material assets, linked at run time.

![A material in the inspector with its shader open in the code editor](/assets/img/balaur/shader_preview.webp)

**UI** - widgets for HUDs, immediate-mode API for tools.

![HUD widgets in the tree and over the safe area, with a button in the inspector](/assets/img/balaur/ui_widgets.webp)

**Audio and input** - [rodio](https://github.com/RustAudio/rodio); keyboard, mouse, gamepads, touch.

**Networking** - HTTP and websockets with compression, delivered once per tick, replayable. [Gamend](https://balaurengine.org/docs/manual/gamend/) on top, the same backend from [Gamend](https://appsinacup.com/gamend/) and the [stress test](https://appsinacup.com/gamend-stress-test/): login, REST, realtime rooms, server hooks.

**Stores** - sign-in, achievements, leaderboards, cloud saves, purchases. Game Center, iCloud and StoreKit today.

Full list on [Features](https://balaurengine.org/features/). What is missing is on the [Roadmap](https://balaurengine.org/docs/roadmap/), each item linked to its plan.

## The editor is a Balaur project

**One binary** is the editor, the CLI and every game's runtime. The editor is itself a Balaur project, so editing an editor script hot reloads the editor.

![An example project open in the editor: the World node selected, the viewport, the inspector, and the Output dock showing the boot](/assets/img/balaur/hello_open.webp)

Tree, inspector, gizmos, timeline, rig tools, play-in-editor, undo. Docks, tools, commands and inspector sections can come from a project's own Rune files. More in [The editor](https://balaurengine.org/docs/manual/editor/).

## Ship as one file

```bash
balaur new my-game
balaur run my-game                  # dev mode, hot reload on
balaur export my-game               # scripts to bytecode, assets into my-game.bpak
balaur play my-game.bpak            # run the pack, no compiler, no watcher
balaur edit my-game                 # open in the editor
```

`export --target <platform>` fuses the pack onto a runtime: **one executable**, no compiler, no sources inside.

Three run modes, same simulation:

| Mode | GPU | Window | What it is for |
| --- | --- | --- | --- |
| headless | no | no | tests, CI, servers, determinism runs |
| offscreen | yes | no | screenshots, automation, visual CI |
| windowed | yes | yes | playing and editing |

Windows, macOS and Linux today. iOS, Android and WebAssembly compile in CI; the browser canvas runtime is on the roadmap. See [Shipping a game](https://balaurengine.org/docs/manual/shipping/).

## Built on the Rust ecosystem

Reuse, don't rewrite:

- [hecs](https://github.com/Ralith/hecs) - ECS
- [Rapier](https://rapier.rs) - physics
- [wgpu](https://wgpu.rs) via [kiss3d](https://github.com/sebcrozet/kiss3d) - rendering
- [egui](https://github.com/emilk/egui) - immediate-mode UI and the editor
- [rodio](https://github.com/RustAudio/rodio) - audio
- [gilrs](https://gitlab.com/gilrs-project/gilrs) - gamepads
- [Rune](https://rune-rs.github.io/) - scripting
- glam + libm - math

Full list on [Built on](https://balaurengine.org/docs/built-on/). Every crate is generated into the [reference](https://balaurengine.org/docs/reference/) from a booted engine, so the docs cannot drift.

## Try it

```bash
git clone https://github.com/balaurengine/balaur
cd balaur
cargo run -p balaur_cli -- new my-game
cargo run -p balaur_cli -- run my-game
```

Needs a stable [Rust toolchain](https://rustup.rs). [Getting started](https://balaurengine.org/docs/getting-started/) · [FAQ](https://balaurengine.org/faq/).

Contributions welcome, AI-assisted too, same bar: you understand and stand behind every line, and it comes with tests and docs. [Principles](https://balaurengine.org/docs/principles/) say how the project is run. Propose big things in [Discussions](https://github.com/balaurengine/balaur/discussions), bugs go in [issues](https://github.com/balaurengine/balaur/issues). A star on [balaurengine/balaur](https://github.com/balaurengine/balaur) helps.
