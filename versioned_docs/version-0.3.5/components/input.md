---
sidebar_position: 3
---
# Input

CommonTextInput component

### Example: 

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

### Props

### text → *String*
----
> **description :**  text that will show up 

> **default :**  --

> **example :** --

---
### onPress → *Function*
----
> **description :**  Press function

> **default :**  --

> **example :** --

---
### leftChild → *Widget*
----
> **description :**  left child widget

> **default :**  null

> **example :** --

---
### rightChild → *Widget*
----
> **description :**  right child widget

> **default :**  null

> **example :** --

---
### bottomChild → *Widget*
----
> **description :**  bottom child widget

> **default :**  null

> **example :** --

---
### topChild → *Widget*
----
> **description :**  top child widget

> **default :**  null

> **example :** --

---
### inlineSpans → *List*
----
> **description :**  In case you need to set different spans inside the text

> **default :**  null

> **example :** 

```jsx
  inlineSpans: [
               TextSpan(
                 text: ' RED ',
                 style: TextStyle(
                   color: Color(COMMON_RED_COLOR),
                 ),
               ),
               TextSpan(text: 'icon color!'),
             ],
```
---
### style → *CommonTextModel*
----
> **description :**  text style

> **default :**  CommonTextModel()

> **example :** 

```jsx
CommonTextModel(
               decoration: TextDecoration.underline,
               decorationThickness: 3.0,
               decorationColor: COMMON_RED_COLOR,
               decorationStyle: TextDecorationStyle.dotted,
               fontWeight: FontWeight.bold,
               fontSize: COMMON_H1_FONT,
             )
```
---
### containerStyle → *CommonContainerModel*
----
> **description :**  Widget style

> **default :**  CommonContainerModel()

> **example :** --

---