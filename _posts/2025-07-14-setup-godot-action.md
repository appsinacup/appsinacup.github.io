---
layout: post
author: dragos
title: Setup Godot Action
tag: action
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/setup_godot/setup_godot_action.png">
</image>

You can find the action on [GitHub](https://github.com/appsinacup/action_setup_godot).

## How to use it

If you have a GitHub Action where you want to download the Godot Engine, simply do like below:

```yml
- name: Setup Godot
  uses: appsinacup/setup-godot-action@main
  with:
    version: '4.4.1-stable'
    platform: 'linux.x86_64'

- name: Check Godot version
  run: |
    $GODOT4 --version
```
