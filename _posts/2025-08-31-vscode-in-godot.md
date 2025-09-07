---
layout: post
author: dragos
title: Running VSCode in the Godot Engine
tag: engine
---

<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

<img controls loop autoplay muted style="width: 100%;" src="/assets/vid/vscode/vscode.gif"/>

## Overview

This is a proof of concept of embedding the VSCode text editor in the Godot Engine.

Features:
- Authenticate
- Edit Code
- Terminal
- Change Color themes
- Plugins
- Copilot
- etc.

Basically everything the regular editor would.

How to get it? Right now, it will be built into [Gonuts](https://appsinacup.com/engine/), the custom Godot editor with extra features. In future, it will also be a separate GDExtension.

## Implementation

For implementation, the Visual Studio Code Editor is actually a webview rendering the page `https://vscode.dev`. When the Engine starts, it runs the command: `code tunnel`. Then, the vscode web version connects to that.

This is done by using:
- a modified version of [doceazedo/godot_wry](https://github.com/doceazedo/godot_wry) for the webview
- a modified version of [markeel/gdterm](https://github.com/markeel/gdterm) for terminal handling
- a custom written module that creates and handles the vscode webpage.

## Notes

- This is still work in progress, but will update this page next week sometime when I will have a public build working. Right now I have it working locally.
