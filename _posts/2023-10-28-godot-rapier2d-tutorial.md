---
layout: post
title: Godot Rapier2D Tutorial
tag: godot-rapier2d
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/rapier-2d/banner.jpg">
</image>

You can find Godot Rapier2D on [GitHub](https://github.com/appsinacup/godot-rapier-2d) or [Godot Asset Library](https://godotengine.org/asset-library/asset/2267).

## How to install the Rapier 2D plugin

To install the Rapier 2D plugin in Godot Editor:

1. Open the AssetLib tab.
2. Search for Rapier 2D and click on the plugin.
3. Click Download and then Install.
4. Restart when prompted.

To enable the plugin:

1. Go to Project -> Project Settings -> General tab.
2. Go to Physics -> 2D. Enable Advance Settings.
3. At Physics Engine select Rapier2D.
4. Restart when prompted.

## How to stress test the Rapier 2D plugin

Download the [Godot Physics Tests](https://github.com/fabriceci/Godot-Physics-Tests) repo.

Go to the `tests/performance/collisions/tests/2d/avg_fps_before_low_fps.gd` test. Run the scene by clicking Run Current Scene.

Download the Rapier 2D plugin and enable it as described above.

Run the scene again. Compare the two runs by seeing maximum shapes supported and simulation stability.
