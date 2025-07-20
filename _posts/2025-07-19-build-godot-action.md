---
layout: post
author: dragos
title: Build Godot Action
tag: action
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/build_godot/build-godot.png">
</image>

You can find the action on [GitHub](https://github.com/appsinacup/action_godot_builder). You can set a custom godot repo, encryption key, base version, build profile and modules to disable.

## How to use it

Simply clone this repo, run the action with the parameters you want, and create a release. From there on, either manually download the engine and templates, or use [action_setup_godot](https://github.com/appsinacup/action_setup_godot) action and set the `repo` and `release-tag` parameters:

```yml
- name: Setup Godot
  uses: appsinacup/setup-godot-action@main
  with:
    version: '4.4.1-stable'
    platform: 'linux.x86_64'
    repo: 'appsinacup/action_godot_builder'
    release-tag: '1.2.3'

- name: Check Godot version
  run: |
    $GODOT4 --version
```
