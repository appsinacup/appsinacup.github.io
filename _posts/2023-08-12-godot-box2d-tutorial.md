---
layout: post
title: Godot Box2D Tutorial
tag: godot-box2d
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/box2d/banner.jpg">
</image>

You can find Godot Box2D on [GitHub](https://github.com/appsinacup/godot-box2d) or [Godot Asset Library](https://godotengine.org/asset-library/asset/2007).

<iframe width="560" height="315" src="https://www.youtube.com/embed/T_vFVh5qZiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How to install the Box2D plugin

To install the SoftBody2D plugin in Godot Editor:

1. Open the AssetLib tab.
2. Search for SoftBody2D and click on the plugin.
3. Click Download and then Install.
4. Restart when prompted.

To enable the plugin:

1. Go to Project -> Project Settings -> General tab.
2. Go to Physics -> 2D. Enable Advance Settings.
3. At Physics Engine select Box2D.
4. Restart when prompted.

## How to stress test the Box2D plugin

Download the [Godot Physics Tests](https://github.com/fabriceci/Godot-Physics-Tests) repo.

Go to the `tests/performance/collisions/tests/2d/avg_fps_before_low_fps.gd` test. Run the scene by clicking Run Current Scene.

Download the Box2D plugin and enable it as described above.

Run the scene again. Compare the two runs by seeing maximum shapes supported and simulation stability.
