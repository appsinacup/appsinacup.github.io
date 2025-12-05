---
layout: post
author: dragos
title: Godot Apple Sign In
tag: addon
---

![banner](/assets/img/apple-sign-in/banner.png)

Apple Sign In functionality for iOS and macOS in Godot:

- [Github](https://github.com/appsinacup/godot-apple-login)
- [Godot Asset Library](https://godotengine.org/asset-library/asset/4544)

In order to use it, install it from Asset Lib by searching for Godot Apple Sign In:

![search](/assets/img/apple-sign-in/search.png)

Then download it:

![download](/assets/img/apple-sign-in/download.png)

Now, in GDScript you can do:

```py
var apple_sign_in:= AppleSignIn.new()

func _ready() -> void:
	apple_sign_in.apple_output_signal.connect(apple_output_signal)
	apple_sign_in.sign_in()

func apple_output_signal(id, email, name, error):
	if error:
		print("Error: ", error)
	else:
		print("Success: ", id, email, name)
```

# Configure

For iOS, set at Project -> Export -> iOS -> `entitlements/additional`:

```xml
<key>com.apple.developer.applesignin</key>
<array>
    <string>Default</string>
</array>
```

For macOS, set the same entitlements as above (eg. when running codesign):

```sh
codesign --force --options=runtime --verbose --timestamp \
  --entitlements entitlements.plist --sign "<SIGN_ENTITY>" \
  "MyApp.app/Contents/MacOS/MyApp"
```

where `entitlements.plist` contains again:

```xml
<key>com.apple.developer.applesignin</key>
<array>
    <string>Default</string>
</array>
```
