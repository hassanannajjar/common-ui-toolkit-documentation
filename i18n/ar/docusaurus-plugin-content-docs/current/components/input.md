---
sidebar_position: 3
---
# Input

CommonTextInput component

```jsx
CommonTextInput(
                style: CommonTextInputModel(
                  text: 'Intial text input value',
                  focusBorderColor: COMMON_BLACK_COLOR,
                  prefixIcon: CommonIcon(
                    onPress: () {
                      print('Prefix icon pressed');
                    },
                    containerStyle: CommonContainerModel(
                      marginHorizontal: DEVICE_WIDTH * 0.01,
                    ),
                    path: Icons.ac_unit_rounded,
                    iconDataSize: DEVICE_WIDTH * 0.05,
                    color: COMMON_RED_COLOR,
                  ),
                  suffixIcon: CommonIcon(
                    containerStyle: CommonContainerModel(
                      width: DEVICE_WIDTH * 0.04,
                      height: DEVICE_WIDTH * 0.04,
                      marginHorizontal: DEVICE_WIDTH * 0.01,
                    ),
                    color: COMMON_RED_COLOR,
                    path: 'assets/icons/account_icon.svg',
                  ),
                ),
              ),
```

