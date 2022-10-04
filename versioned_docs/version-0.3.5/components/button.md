---
sidebar_position: 2
---
# Button

CommonButton component


```jsx
CommonButton(
                text: 'Button with elevation and custom size',
                containerStyle: CommonContainerModel(
                  width: 0.4,
                  height: 0.1,
                ),
                style: CommonButtonModel(
                  elevation: 10.0,
                  borderRadius: 0.1,

                  // You can customize the button elecation OR use the default one
                  // customElevation: MaterialStateProperty.all(100)

                  // You can customize the overlay color as well OR use the default one
                  // customOverlayColor: MaterialStateProperty.resolveWith(
                  //   (states) {
                  //     return states.contains(MaterialState.pressed)
                  //         ? getColorType(Colors.red)
                  //         : null;
                  //   },
                  // ),

                  // You can customize the background color of the button
                  // cutomBackgroundColor: MaterialStateProperty.all(
                  //   Colors.amber,
                  // ),
                ),
              ),
```

