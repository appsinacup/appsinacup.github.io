---
layout: post
author: dragos
title: Rapier2D Tutorial
tag: addon
---

<image controls autoplay muted style="width: 100%;" src="/assets/img/rapier-2d/banner.jpg">
</image>

You can find Godot Rapier2D on [GitHub](https://github.com/appsinacup/godot-rapier-2d) or [Godot Asset Library](https://godotengine.org/asset-library/asset/2267).

<iframe width="560" height="315" src="https://www.youtube.com/embed/KgKWAZ49T9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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

## Notes

It should be noted that Rapier does not have warm starting capabilities. This means that in specific configurations, such as a stack of boxes or a pyramid of boxes, its stability will be less than that of Box2D. 

That's why, by default, the number of iterations in Rapier is set relatively high. This comes with a performance cost, but it still remains at the forefront in terms of performance. This higher iteration count helps to mitigate the aforementioned stability issue. Hopefully, this feature will be implemented in rapier in the future.

Hopefully, this feature will be implemented in rapier in the future.
