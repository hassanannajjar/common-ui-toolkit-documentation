---
sidebar_position: 1
---
# Container

CommonContainer component

### Example: 

```jsx
CommonContainer(
                isLoading: false,
                loadingWidget: CommonText(),
                onPress: ()=>{},
                child: CommonText(
                  style: CommonTextStyles().h2Style(),
                  text: 'Circle',
                ),
                style: CommonContainerModel()
              ),
```

## Props

### child → *Widget*
----
> **description :**  child widget	

> **default :**  --

> **example :** --

---
### isLoading → *bool*
----
> **description :**  handel the data after loading and check if the data null or not.

> **default :**  false

> **example :** --

---
### loadingWidget → *Widget*
----
> **description :**  custom loading widget.	

> **default :**  

```jsx
CircularProgressIndicator(
                  color: getColorType(
                    loadingColor ?? currentStyle.loadingColor!,
                  ),
                )
```

> **example :** --

---
### style → *CommonContainerModel*
----
> **description :**  Widget style

> **default :**  CommonContainerModel()

> **example :** 

using CommonContainerModel:
```jsx
 CommonContainerModel(
  alignment: Alignment.center,
  loadingColor: 0xff123155,
  )
```  
using defaults style:

```jsx
CommonContainerStyle().bottomShadow
or
CommonContainerStyle().fullShadow
```  
---
### onPress → *Function*
----
> **description :**  press function

> **default :**  null

> **example :** --

---