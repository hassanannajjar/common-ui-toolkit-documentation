---
sidebar_position: 4
---
# Text
  
CommonText component

```jsx
CommonText(
                containerStyle: CommonContainerModel(
                  padding: 0.016,
                  borderRadius: 0.016,
                  marginVertical: 0.016,
                  backgroundColor: COMMON_BLACK_COLOR,
                  touchEffect: TouchableEffect(),
                ),
                style: CommonTextStyles().h2Style().copyWith(
                      fontColor: COMMON_WHITE_COLOR,
                      // backgroundColor: COMMON_WHITE_COLOR,
                      // fontWeight: FontWeight.bold,
                    ),
                text: 'Simple common text',
                onPress: () {
                  print('Simple common text pressed');
                },
              ),
```

