---
layout: page
title: Gonuts
permalink: /engine/
---

# What is it?

Custom builds of Godot with extra features.

- [GitHub](https://github.com/appsinacup/gonuts)

Features:

- [Tiny Lobby](https://github.com/appsinacup/tiny_lobby): Tiny Lobby Server Client with Scripted Backend.
- [Godot Sandbox](https://github.com/libriscv/godot-sandbox): In-editor scripting and sandboxing for Godot

Optimizations:

- [3D Disabled](https://docs.godotengine.org/en/stable/contributing/development/compiling/optimizing_for_size.html#disabling-3d): Excludes 3D features for 2D only games.
- [Advanced GUI Disabled](https://docs.godotengine.org/en/stable/contributing/development/compiling/optimizing_for_size.html#disabling-advanced-gui-objects): Excludes complex GUI controls such as Tree, ItemList, TextEdit or GraphEdit.

## Gonuts 4.4.1

||Tiny Lobby|Godot Sandbox|3D Disabled|Advanced GUI Disabled|
|-|-|-|-|-|
|Tiny Lobby|x|x|x|x|
|Godot Sandbox|x|x|x|x|
|3D Disabled|x|x|x|x|
|Advanced GUI Disabled|x|x|x|x|

## Note

### How does this all work?

Some addons don't have direct module conversion, but there is this nice [gdextension-to-module](https://github.com/Ughuuu/gdextension-to-module) trick we use.

### Why?

Because it can be done.

### I want an addon that's not present

Come to our discord.

### How many combinations are there?

Every new feature/optimization adds 1 new build combination. It would be *combination* x *combination*.

- Eg. for 2 it would be 2 x 2 = 4
- Eg. for 3 it would be 3 x 3 = 9
- Eg. for 4 it would be 3 x 3 = 16 (We are here now)
- Eg. for 5 it would be 5 x 5 = 25
- Eg. for 6 it would be 6 x 6 = 36
- Eg. for 7 it would be 7 × 7 = 49  
- Eg. for 8 it would be 8 × 8 = 64  
- Eg. for 9 it would be 9 × 9 = 81  
- Eg. for 10 it would be 10 × 10 = 100

### How much time it takes for 1 build?

Uncached builds might take up to 1-2 hours. Cached builds might take 10-20 minutes.

Assuming it's all uncached builds, for 100 builds it would take worst case 200 hours, 8.3 days (assuming not parallel).
