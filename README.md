# HOPE: a compact DBT skills tool

That will hopefully be usefull to you. These DBT tools are meant to help with panic attacks, suicidal ideations, emotional flashbacks, and other episodes. They were originally developed by Marsha M. Linehan to help BPD patients, but since proven usefull for many others.

by [AveBrain](https://www.linkedin.com/in/yuliya-kyrychenko-329b2918b/) & [RestlessSun](https://github.com/KarynaKhatkhokhu)

Supported language: RU·UA·EN

# DEMO

<p>
<img src="demo-3.png " width="250">
<img src="demo-4.png " width="250">
</p>
---
<p>
<img src="demo-1.png " width="250">
<img src="demo-2.png " width="250">
</p>


# TECHSTACK

![React Native](https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
[![Build Status](https://github.com/wix/react-native-ui-lib/blob/master/ios/rnuilib/Images.xcassets/AppIcon.appiconset/20.png?raw=true)](https://buildkite.com/wix-mobile-oss/react-native-ui-lib) ![RNULib](https://img.shields.io/badge/RNULib-20232A?logo=react-native-ui-library&logoColor=FFFFFF&style=for-the-badge)
![Expo](https://img.shields.io/badge/EXPO-20232A?logo=expo&logoColor=000000&style=for-the-badge)

![Inkscape](https://img.shields.io/badge/Inkscape-20232A?logo=Inkscape&logoColor=FFFFFF&style=for-the-badge)
![DBT](https://img.shields.io/badge/DBT-20232A?style=for-the-badge)

- React Native
- Expo / Metro
- RNULIB
- Inkscape
- Marsha M. Linehan's Work

# DEV LOG

## DONE

- [x] MVP skills (Square Breathing, TIPP, STOP)
- [x] Nightmode/Lightmode
- [x] i18n Translations (ru, ua, eng)
- [x] proofread the translated text
- [x] add AveBrain Logo
- [x] potentially: Paired Muscle Relaxation do-along screen (can be navigated from TIPP)
- [x] extract color scheme in separate files clean up and normalise loadSchemes
    - [x] clean up themes for PMR files
    - [x] make sure to clean up themes for components

## TODO

- [ ] ==5-4-3-2-1 screen (can be navigated from STOP)==
- [ ] ==lagnuage can be changed in settings==
- [ ] T in TIPP is pressable and has an ice bowl as an illustration (as well as an extended list of cooling methods)
---
- [ ] add sounds (optional chimes) to Square Breathing
- [ ] STOP and TIPP steps give extended explanation when pressed


### Technical Debt / Refactoring Tasks

- [ ] proof-read PMR for russian and ukrainian
- [ ] "Close" should be available on Effective rethinking modal tip at all points, user shouldn't need to scroll all the way down
---
- [x] cleanup Square Breathing animation
- [ ] optimise asset size
- [ ] normalize components (as functions)
- [ ] cleanup unused components
