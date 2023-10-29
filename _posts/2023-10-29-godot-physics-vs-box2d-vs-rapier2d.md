---
layout: post
title: Godot Physics vs Box 2D vs Rapier 2D
tag: rapier2d, box2d
---
<!-- [Attributes by Finsweet] Auto Video -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js"></script>

# Introduction of each framework

This post will focus on comparing each physics engine as a Physics Server in Godot, so they both have to implement the same API. When refering if a physics engine has a feature or not, I will refer to the Godot Asset that implements that physics engine (eg. Godot Box2D and Godot Rapier2D).

## Godot Physics 2D

The Godot Engine is a free, all-in-one, cross-platform game engine that makes it easy for you to create 2D and 3D games. So it's no surprise it also has a physics engine that works great for most use cases.

## Rapier2D

<image controls autoplay muted style="width: 100%;" src="/assets/img/rapier-2d/banner.jpg">
</image>

Rapier is set of 2D and 3D physics engines focused on performance. They are written with the Rust programming language, by the [Dimforge](https://dimforge.com) organization. It is forever free and open-source! It is a relatively new contender, with only about 3 years since it was created.

## Box2D

<image controls autoplay muted style="width: 100%;" src="/assets/img/box2d/banner.jpg">
</image>

Box2D is a free 2D open source physics engine for games and published under MIT license. It is written by [Erin Catto](https://box2d.org) and is one of the oldest (more than 15 years) and most stable 2d physics library out there.

# Features

As it's expected, Godot Physics 2D has most of the node features, as it is the one defining the API for the other two.

|Godot Feature|Dynamics features|Rapier2D|Box2D|Godot Physics 2D|
|-|-|-|-|-|
|RigidBody2D|Rigid Body|✅|✅|✅|
|StaticBody2D|Static Body|✅|✅|✅|
|Area2D|Static Body with callbacks|✅|✅|✅|
|AnimatableBody2D|Kinematic Body|✅|✅|✅|
|CharacterBody2D.move_and_slide|The logic for moving|✅|❌ *1|✅|
|CollisionObject2D.collision_layer and CollisionObject2D.collision_mask|Intersection Filtering|✅|🅾 *2|✅|
|Shape2D|Circles, Convex and Concave Polygons and Compound|✅|✅|✅|
|Shape2D.scale|Scaling the shapes|✅|🅾 *3|✅|
|PinJoint2D|A revolute joint|✅|✅|✅|
|GrooveJoint2D|A prismatic joint|✅|✅|✅|
|DampedSpringJoint2D|A spring joint|❌|✅|✅|
|SIMD|Single instruction, multiple data|✅|❌|❌|
|Cross-platform determinism|The simulation would run the same on any platform|✅|❌|❌|
|Single and Double precision|Large game worlds support|✅|❌*4|✅|
|Parallelization Support|Enables parallelism of the physics pipeline|✅|❌|✅|

✅ - Implemented
🅾 - Partial
❌ - Missing (TODO)

*1 The Box2D b2Distance function doesn't always return two points, which is how it is normally in Godot Physics. So this logic is a bit harder to implement.

*2 Box2D doesn't support collision filtering where the layer and mask are asymetrically set(eg. one object collides with the other but the other doesn't receive any reaction force). Other than that, everything else is supported.

*3 It is currently missing ununiform scaling of circles and capsules. For comparison, rapier offers a function that transforms the circle into a polygon in this case.

*4 Box2D is written with everything being a float. So in order to support this, a lot of changes need to be done.

# Performance

