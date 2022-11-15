---
sidebar_position: 2
---

# Button

CommonButton component


  <p align="center">
    <iframe
      scrolling="no"
      src="https://common-ui-toolkit-example.netlify.app/#/buttons"
      width="300px"
      height="600px"
    />
  </p>

### Example: 

```jsx title=main.dart {2-6}
CommonButton(
                text: 'Button with elevation and custom size',
                containerStyle: CommonContainerModel(
                  width: 0.4,
                  height: 0.1,
                ),
                style: CommonButtonModel(
                  elevation: 10.0,
                  borderRadius: 0.1,
                ),
              ),
```
## Props

### text → *String*
----
> **description :** Text that will show up

> **default :**  ''

> **example :** -- 

---
### child → *Widget*
----
> **description :**  child widget	

> **default :** --

> **example :** --
---
### onPress → *Function*
----
> **description :** on press function

> **default :** --

> **example :** --
-----
### onLongPress → *Function*
----
> **description :** on press function

> **default :** --

> **example :** --
-----
### style → *CommonButtonModel*
----
> **description :**  Widget style

> **default :**  CommonButtonModel()

> **example :** 

```jsx
CommonButtonModel(
               elevation: 10.0,
               borderRadius: 0.1,
             )
```
---
### containerStyle → *CommonContainerModel*
----
> **description :**  Container style

> **default :**  CommonContainerModel()

> **example :** 

```jsx
CommonContainerModel(
             )
```
---
### textContainerStyle → *CommonContainerModel*
----
> **description :**  Text Container style

> **default :**  CommonContainerModel()

> **example :** 

```jsx
CommonContainerModel(
             )
```
---
### textStyle → *CommonTextModel*
----
> **description :**  Text  style

> **default :**  CommonTextModel()

> **example :** 

```jsx
CommonTextModel(
             )
```
---