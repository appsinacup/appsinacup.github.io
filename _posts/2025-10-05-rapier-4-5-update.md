---
layout: post
author: dragos
title: Godot Rapier update to Godot 4.5
tag: engine
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/rapier-2d/banner.jpg">
</image>

## Updated Godot Rapier to latest Godot (4.5) and Rapier (v29)

The version of [rapier](https://github.com/dimforge/rapier) I was using for [Godot Rapier](https://github.com/appsinacup/godot-rapier-physics) was about 1 year old by now. It was missing new features and bugfixes. Most notably a 25% performance increase (theoretical, haven't tested) as well as layers for liquids.

Also updated it to work with the new [Godot 4.5](https://godotengine.org/releases/4.5/). For this there was mostly a small API change.

Aside for this, the godot-rust community are working hard on a feature that might bring godot-rapier to parity with the old C++ implementation (right now it is able to do about 6k circles before dropping FPS, after it might reach 9k circles).

## Upcoming features

- Increased performance
- Module build

Other things aren't really planned, I might fix more bugs moving forward, but first I want to solve these 2.
