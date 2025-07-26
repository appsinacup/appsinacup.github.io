---
layout: page
title: Tools
permalink: /tools/
---

Tools for the Godot Engine from development to infrastructure and release.

[Development](#development)

1. [Godot SoftBody2D](#godot-softbody2d)
2. [Godot Rapier Physics](#2-godot-rapier-physics)
3. [Shared Menus](#3-shared-menus)
4. [GDExtension To Module](#4-gdextension-to-module)

[Infrastructure](#infrastructure)

1. [Tiny Lobby](#1-tiny-lobby)

[Release](#release)

1. [Build Godot Action](#1-build-godot-action)
2. [Setup Godot Action](#2-setup-godot-action)
3. [Export Godot Game Action](#3-export-godot-game-action)
4. [Deploy Godot Game Action](#4-deploy-godot-game-action)
5. [Release Checklist](#5-release-checklist)

## Development

### 1. Godot SoftBody2D

Adds deformable 2D soft bodies to Godot.

- [GitHub Repo](https://github.com/appsinacup/godot-softbody2d)
- [Tutorial](https://softbody2d.appsinacup.com/docs/intro)

![softbody2d](https://raw.githubusercontent.com/appsinacup/godot-softbody2d/refs/heads/main/docs/godot_softbody.gif)

### 2. Godot Rapier Physics

2D and 3D physics engine for the Godot game engine. with better stability, performance, liquids, determinism, state serialization and no ghost collisions.

- [GitHub Repo](https://github.com/appsinacup/godot-rapier-physics)
- [Tutorial](https://godot.rapier.rs/docs/intro)

![rapier](https://github.com/appsinacup/godot-rapier-physics/blob/main/docs/rapier-vid.gif?raw=true)

### 3. Shared Menus

Shared menus used in games.

- [GitHub Repo](https://github.com/appsinacup/addon_shared_menus)

![menus](https://raw.githubusercontent.com/appsinacup/addon_shared_menus/main/docs/shared_menus.gif)

### 4. GDExtension To Module

Documentation on how to port GDExtension's to Modules. Useful if you want to reduce size of the exported game (especially useful for web).

- [GitHub Repo](https://github.com/appsinacup/documentation_gdextension_to_module)

### 4. Tiny Lobby Client

- [GitHub](https://github.com/appsinacup/addon_tiny_lobby_client)
- [Server](https://github.com/appsinacup/tiny_lobby)

![lobby](https://github.com/appsinacup/tiny_lobby/raw/main/docs/example.gif)

The client that connects to the Tiny Client Websocket Server.

## Infrastructure


### 1. Tiny Lobby

- [GitHub](https://github.com/appsinacup/tiny_lobby)
- [Documentation](https://github.com/appsinacup/documentation_lobby)
- [Article](https://appsinacup.com/tiny-lobby/)
- [Client Addon](https://github.com/appsinacup/addon_tiny_lobby_client)

![lobby](https://github.com/appsinacup/tiny_lobby/raw/main/docs/example.gif)

Multiplayer C++ Lobby Server with login for create / join / find lobbies.. It starts a websocket server and has backend scripting in Luau and AngelScript.

## Release

### 1. Build Godot Action

GitHub Action that builds the Godot Engine for Windows, Linux and Mac, as well as templates.

- [GitHub Repo](https://github.com/appsinacup/action_godot_builder)
- [Article](https://appsinacup.com/build-godot-action/)

![build godot](https://github.com/appsinacup/action_godot_builder/raw/main/docs/inputs.png)

### 2. Setup Godot Action

GitHub Action that sets up the Godot Engine for Windows, Linux and Mac, as well as templates.

- [GitHub Repo](https://github.com/appsinacup/action_setup_godot)
- [Article](https://appsinacup.com/setup-godot-action/)

![setup godot](https://raw.githubusercontent.com/appsinacup/action_setup_godot/main/docs/example.png)

### 3. Export Godot Game Action

Actions to build Godot game for all platforms.

- [Github Repo](https://github.com/appsinacup/action_export_godot_game)
- [Article](https://appsinacup.com/export-godot-game-action/)

![export godot game](https://raw.githubusercontent.com/appsinacup/action_export_godot_game/main/docs/example.png)

### 4. Deploy Godot Game Action

Actions to deploy Godot game to:

- itch.io
- Play Store
- iOS App Store
- macOS App Store
- Steam

Read more:

- [Github Repo](https://github.com/appsinacup/action_deploy_godot_game)
- [Article](https://appsinacup.com/export-godot-game-action/)

![deploy godot game](https://raw.githubusercontent.com/appsinacup/action_deploy_godot_game/refs/heads/main/docs/example.png)

### 5. Release Checklist

A checklist of things needed to do when releasing a game.

- [GitHub Repo](https://github.com/appsinacup/documentation_release_checklist)
