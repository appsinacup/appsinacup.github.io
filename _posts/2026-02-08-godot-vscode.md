---
layout: post
author: dragos
title: Godot VSCode - Code inside the Godot Engine
tag: addon
---

<img controls loop autoplay muted style="width: 100%;" src="/assets/vid/vscode/vscode.gif"/>

<b>VSCode</b> running <i>inside</i> the Godot game engine.upd

How to get it? Download it from [appsinacup/godot_vscode_ide](https://github.com/appsinacup/godot_vscode_ide).

## Implementation

For implementation, the **VSCode** Editor is actually a **Webview** rendering the page `https://vscode.dev`. When the Godot Engine starts, it runs the command: `code tunnel`. Then, the VSCode website connects to that.

This is done by using:
- a modified version of [doceazedo/godot_wry](https://github.com/doceazedo/godot_wry) for the webview. Fixes a bunch of stuff in godot_wry for it to be able to run in editor, open popup links (For authentication), and more (also opened PR's to fix them in mainstream repo)
- a custom written GDScript addon that creates and handles the vscode webpage.
