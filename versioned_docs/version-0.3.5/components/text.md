---
sidebar_position: 4
---
# Text
  
CommonText component

### Example: 

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

### Props

### text → *String*
----
> **description :**  text that will show up 

> **default :**  --

> **example :** --

---
### onChanged → *Function*
----
> **description :**  Once the value of the text input changes this functions gets triggered and returns the changed value.

> **default :**  --

> **example :** 

```jsx
onChanged: (value) {
      
     }
```

---
### onTap → *Function*
----
> **description :**  This function gets called once the text input is pressed	

> **default :**  --

> **example :** --

---
### textEditingController → *TextEditingController*
----
> **description :**  controller of the text input to get access to all text input attributes.

> **default :**  TextEditingController()

> **example :** --

---
### style → *CommonTextInputModel*
----
> **description :**  text style

> **default :**  CommonTextModel()

> **example :** 

```jsx
 CommonTextInputModel(
               counterText: 'Styled counter Text',
               counterStyle: TextStyle(
                 color: Colors.red,
               ),
               borderWidth: 3,
               focusBorderColor: COMMON_RED_COLOR,
               fillColor: COMMON_GREY_COLOR,
               prefixWidget: CommonText(
                 containerStyle: CommonContainerModel(
                   marginHorizontal: DEVICE_WIDTH * 0.03,
                 ),
                 style: CommonTextModel(
                   fontColor: COMMON_WHITE_COLOR,
                 ),
                 text: '+966',
               ),
               suffixWidget: CommonText(
                 containerStyle: CommonContainerModel(
                   marginHorizontal: DEVICE_WIDTH * 0.03,
                 ),
                 style: CommonTextModel(
                   fontColor: COMMON_WHITE_COLOR,
                 ),
                 text: 'Palestine',
               ),
             )
```
---
### containerStyle → *CommonContainerModel*
----
> **description :**  Widget style

> **default :**  CommonContainerModel()

> **example :** --

---
