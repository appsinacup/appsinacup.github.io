---
layout: post
title: Godot Physics 4.2 vs Box 2D 2.4.1 vs Rapier 2D 0.17.2
tag: rapier2d, box2d
---
<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

# Introduction of each framework

This post will focus on comparing each physics engine as a `Physics Server` in Godot, so they both have to implement the same API. When refering if a physics engine has a feature or not, I will refer to the Godot Asset that implements that physics engine (eg. Godot Box2D and Godot Rapier2D).

## Godot Physics 2D 4.2

<image controls autoplay muted style="width: 100%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Godot_logo.svg/1598px-Godot_logo.svg.png" style="background-color: white;">
</image>


The [Godot Engine](https://godotengine.org) is a free, all-in-one, cross-platform game engine that makes it easy for you to create 2D and 3D games. So it's no surprise it also has a physics engine that works great for most use cases.

## Box2D 2.4.1

<image controls autoplay muted style="width: 100%;" src="/assets/img/box2d/banner.jpg">
</image>

Box2D is a free 2D open source physics engine for games and published under MIT license. It is written by [Erin Catto](https://box2d.org) and is one of the oldest (more than 15 years) and most stable 2d physics library out there.

## Rapier2D 0.17.2

<image controls autoplay muted style="width: 100%;" src="/assets/img/rapier-2d/banner.jpg">
</image>

Rapier is set of 2D and 3D physics engines focused on performance. They are written with the Rust programming language, by the [Dimforge](https://dimforge.com) organization. It is forever free and open-source! It is a relatively new contender, with only about 3 years since it was created.

# Features

As it's expected, Godot Physics 2D has most of the node features, as it is the one defining the API for the other two.

|Godot Feature|Dynamics features|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|-|
|DampedSpringJoint2D|A spring joint|✅|✅|❌|
|CharacterBody2D.move_and_slide|The logic for moving|✅|❌ *1|✅|
|SIMD|Single instruction, multiple data|❌|❌|✅|
|Cross-platform determinism|The simulation would run the same on any platform|❌|❌|✅|
|64-bits physics|Large game worlds support|✅|❌*3|✅|
|Parallelization Support|Enables parallelism of the physics pipeline|✅|❌|✅|

✅ - Implemented
❌ - Missing

*1 The Box2D b2Distance function doesn't always return two points, which is how it is normally in Godot Physics.

*2 Box2D is written with everything being a float.

# Performance

The project used is the [appsinacup/benchmark](https://github.com/appsinacup/benchmark). The steps for changing the physics backend is done by using the options menu from Godot.

These are the simulation parameters used in all physics engines:

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Timestep length|0.016|0.016|0.016|
|Number of velocity iterations|-|8|19|
|Number of position iterations|16|3|-|
|Number of velocity friction iterations|-|-|27|
|Number of stabilization iterations|-|-|1|
|Number of threads|1|1|1|

* Note: These are the **plugin** default values for all libraries. The libraries themselves have other defaults. Also, not all libraries have the same number of parameters

The machine used in this benchmark:

- A MacBook Air with M1 (plugged to a power outlet).

## Falling Circles

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/falling_circles.webm">
</video>

In this benchmark, we keep adding falling circles until the fps drops or stability is affected.

<image controls autoplay muted style="width: 100%;" src="/assets/img/benchmark/falling-circles.png">
</image>

## Falling Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/falling_rectangles.webm">
</video>

In this benchmark, we keep adding falling boxes until the fps drops or stability is affected.

<image controls autoplay muted style="width: 100%;" src="/assets/img/benchmark/falling-squares.png">
</image>

## Pyramid of Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/pyramid.webm">
</video>

In this benchmark, we keep increasing the height of the pyramid until it is unstable.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Height|10|40|20|
|Number of Rectangles|110|1640|420|

## Fabric of Pin Joints

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/fabric.webm">
</video>

In this benchmark, we keep increasing the width and size of the fabric until we get instability.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Size|10|60|30|
|Number of Rectangles|100|3600|900|
|Number of Pin Joints|172|7022|1722|

## Fabric of Spring Joints

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/fabric_soft.webm">
</video>

In this benchmark, we keep increasing the width and size of the fabric until we get instability.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Size|10|30|-|
|Number of Rectangles|100|90|-|
|Number of Pin Joints|172|1712|-|

## Stack of Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/stack.webm">
</video>

In this benchmark, we keep increasing the height of the pyramid until it is unstable.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Height|10|25|10|

# Conclusion

## Godot Physics 2D (4.2)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|performs ok for small amount of objects.|No|No|Last Place|Last Place|

Notes:

- in reality after a certain amount of objects, it starts to jitter a lot, making it completely unusable (eg. objects pass through things and other bad things).

## Box2D (2.4.1)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|a little slower than godot.|No|No|Best|Best|

Notes:

- CharacterBody2D.move_and_slide implementation is very jittery (this does not reflect on the libray but on me, the one who wrote the wrapper that integrates Box2D).

## Rapier (0.17.2)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|Best|Yes|Yes|Better than Godot, but not best|Better than Godot, but not best|

Note:

- missing spring joint.
- The stackability might be improved when warmstarter is implemented.


---

This article was inspired from the [Announcing the Rapier physics engine](https://www.dimforge.com/blog/2020/08/25/announcing-the-rapier-physics-engine/) post.
