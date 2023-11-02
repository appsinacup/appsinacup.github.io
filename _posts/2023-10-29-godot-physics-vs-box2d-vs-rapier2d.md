---
layout: post
title: Godot Physics (4.2) vs Box 2D (2.4.1) vs Rapier 2D (0.17.2)
tag: rapier2d, box2d
---
<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

# Table of Contents
1. [Introduction](#1-introduction)
2. [Features](#2-features)
3. [Performance](#3-performance)
4. [Conclusion](#4-conclusion)

# 1. Introduction

This post will focus on comparing each physics engine as a `Physics Server` in Godot, so they both have to implement the same API. When refering if a physics engine has a feature or not, I will refer to the Godot Asset that implements that physics engine (eg. Godot Box2D and Godot Rapier2D).

## 1.1 Godot Physics 2D (4.2)

The [Godot Engine](https://godotengine.org) is a free, all-in-one, cross-platform game engine that makes it easy for you to create 2D and 3D games. So it's no surprise it also has a physics engine that works great for most use cases.

## 1.2 Box2D (2.4.1)

Box2D is a free 2D open source physics engine for games and published under MIT license. It is written by [Erin Catto](https://box2d.org) and is one of the oldest (more than 15 years) and most stable 2d physics library out there.

## 1.3 Rapier2D (0.17.2)

Rapier is set of 2D and 3D physics engines focused on performance. They are written with the Rust programming language, by the [Dimforge](https://dimforge.com) organization. It is forever free and open-source! It is a relatively new contender, with only about 3 years since it was created.

# 2. Features

As it's expected, Godot Physics 2D has most of the node features, as it is the one defining the API for the other two.

|Godot Feature|Dynamics features|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|-|
|DampedSpringJoint2D|A spring joint|✅|✅|❌|
|CharacterBody2D.move_and_slide|The logic for moving|✅|❌|✅|
|SIMD|Single instruction, multiple data|❌|❌|✅|
|Cross-platform determinism|The simulation would run the same on any platform|❌|❌|✅|
|64-bits physics|Large game worlds support|✅|❌|✅|
|Parallelization Support|Enables parallelism of the physics pipeline|✅|❌|✅|

✅ - Implemented
❌ - Missing

|1st|2nd|3rd|
|-|-|-|
|**Rapier2D**|Godot Physics 2D|Box2D|

# 3. Performance

The project used is the [appsinacup/benchmark](https://github.com/appsinacup/benchmark). The steps for changing the physics backend is done by using the options menu from Godot. The default values from plugins are used.

## 3.1 Falling Circles

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/falling_circles.webm">
</video>

In this benchmark, we keep adding falling circles until the fps drops or stability is affected.

<image controls autoplay muted style="width: 80%;" src="/assets/img/benchmark/falling-circles.png">
</image>

|1st|2nd|3rd|
|-|-|-|
|**Rapier2D**|Godot Physics 2D|Box2D|

## 3.2 Falling Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/falling_rectangles.webm">
</video>

In this benchmark, we keep adding falling boxes until the fps drops or stability is affected.

<image controls autoplay muted style="width: 80%;" src="/assets/img/benchmark/falling-squares.png">
</image>

|1st|2nd|3rd|
|-|-|-|
|**Rapier2D**|Godot Physics 2D|Box2D|

## 3.3 Pyramid of Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/pyramid.webm">
</video>

In this benchmark, we keep increasing the height of the pyramid until it is unstable.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Height|10|40|20|
|Number of Rectangles|110|1640|420|

|1st|2nd|3rd|
|-|-|-|
|**Box2D**|Rapier2D|Godot Physics 2D|

## 3.4 Fabric of Pin Joints

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/fabric.webm">
</video>

In this benchmark, we keep increasing the width and size of the fabric until we get instability.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Size|10|60|30|
|Number of Rectangles|100|3600|900|
|Number of Pin Joints|172|7022|1722|

|1st|2nd|3rd|
|-|-|-|
|**Box2D**|Rapier2D|Godot Physics 2D|

## 3.5 Fabric of Spring Joints

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/fabric_soft.webm">
</video>

In this benchmark, we keep increasing the width and size of the fabric until we get instability.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Size|10|30|-|
|Number of Rectangles|100|90|-|
|Number of Pin Joints|172|1712|-|

|1st|2nd|3rd|
|-|-|-|
|**Box2D**|Godot Physics 2D|Rapier2D|

## 3.6 Stack of Boxes

<video controls loop autoplay muted style="width: 100%;">
    <source type="video/webm" src="/assets/vid/benchmark/stack.webm">
</video>

In this benchmark, we keep increasing the height of the pyramid until it is unstable.

|Parameter|Godot Physics 2D|Box2D|Rapier2D|
|-|-|-|-|
|Max Height|10|25|10|

|1st|2nd|2nd|
|-|-|-|
|**Box2D**|Rapier2D|Godot Physics 2D|

# 4. Conclusion

## 4.1 Godot Physics 2D (4.2)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|Performs ok for small amount of objects.|No|No|Last Place|Last Place|

Notes:

- in reality after a certain amount of objects, it starts to jitter a lot, making it completely unusable (eg. objects pass through things and other bad things).

## 4.2 Box2D (2.4.1)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|A little slower than godot.|No|No|**Best**|**Best**|

Notes:

- CharacterBody2D.move_and_slide implementation is very jittery (this does not reflect on the libray but on me, the one who wrote the wrapper that integrates Box2D).

## 4.3 Rapier (0.17.2)

|Performance|SIMD|Cross Platform Determinism|Stackability|Joint Stability|
|-|-|-|-|-|
|**Best, about 2x,3x faster than competition**|**Yes**|**Yes**|Better than Godot, but not best|Better than Godot, but not best|

Note:

- Missing spring joint.
- The stackability might be improved when warmstarter is implemented.


---

This article was inspired from the [Announcing the Rapier physics engine](https://www.dimforge.com/blog/2020/08/25/announcing-the-rapier-physics-engine/) post.
