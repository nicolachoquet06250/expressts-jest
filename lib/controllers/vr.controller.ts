import { Request, Response } from "express";

export class Vr {
    index(req: Request, res: Response) {
        res.send(`<!DOCTYPE html>
<html lang="fr">
<head>
    <title>VR with A-FRAME</title>
    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
</head>
<body>
<!--<a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#66CCFF"></a-sky>
</a-scene>-->
<a-scene avatar-replayer="" background="color: #333" background-audio="song: https://aframe.io/assets/audio/birds.mp3; volume: 0.08"
         bind__air-scaler="cameraScaleFactor: cameraScaleFactor; entityId: focusedEntityId; gridTransform: tools.gridTransformActive"
         bind__bounding-box="enabled: isBoundingBoxEnabled; entityId: focusedEntityId; isHighlighted: isFocusedEntityTouched; siteName: siteName"
         bind__camera-scaler="enabled: tools.cameraScalerEnabled" bind__data-build-mode="buildMode"
         bind__data-craft-mode="craftMode" bind__data-play-mode="playMode"
         bind__entity-recenter="craftMode: craftMode; entityId: focusedEntityId; scriptMode: scriptMode"
         bind__inventory-item-system="inventoryOpen: inventory.open; page: inventory.page"
         bind__super-environment-updater="buildMode: buildMode; craftMode: craftMode; isSiteLoading: isSiteLoading; preset: environment.presetColor"
         bind__ui="isSitePublished: isSitePublished; siteName: siteName"
         bind__play-sound__undo="enabled: tools.undoEnabled"
         bind__teleport-refresh="isLoadingSite: isLoadingSite; playMode: playMode"
         bounding-box="color: #48BAEA; highlightColor: #8CEEFF" camera-scaler="" console-shortcuts=""
         debug-controller="enabled: false" debug-shapes="enabled: false" debug-scripts="enabled: false"
         fog="density: 0.0000025" light="defaultLightsEnabled: false" renderer-pixel-ratio=""
         play-sound__undo="sound: https://aframe.io/assets/audio/undo.mp3; event: undo; volume: 0.2" preloader=""
         renderer="maxCanvasWidth: 2880" vr-mode-ui="enterVRButton: #vrButton" inspector="" keyboard-shortcuts=""
         screenshot="" shadow="type" air-scaler="" data-build-mode="false" data-craft-mode="false" data-play-mode="true"
         entity-recenter="" inventory-item-system="" super-environment-updater="" ui="" teleport-refresh="">
    <a-assets timeout="10000">
        <img id="menuIcons" src="https://aframe.io/assets/img/menuIcons.svg"> 
        <img id="splash" src="https://aframe.io/assets/img/splash.png">
        <audio id="deleteSound" src="https://aframe.io/assets/audio/delete.mp3"></audio>
        <audio id="dingSound" src="https://aframe.io/assets/audio/ding.mp3"></audio>
        <a-asset-item id="controllerVive" src="https://aframe.io/assets/models/controller/controller-vive.gltf"></a-asset-item>
        <a-asset-item id="controllerOculus" src="https://aframe.io/assets/models/controller/controller-oculus.gltf"></a-asset-item>
        <a-asset-item id="laserObj" src="https://aframe.io/assets/models/laser/laser.obj"></a-asset-item>
        <a-asset-item id="humanScaleMarkerModel" src="https://aframe.io/assets/models/human/human.gltf"></a-asset-item>
        <a-mixin id="text" text="font: https://aframe.io/assets/fonts/Roboto-msdf.json; fontImage: https://aframe.io/assets/fonts/Roboto-msdf.png" render-order="5"></a-mixin>
        <a-mixin id="blueText" text="color: #48BAEA"></a-mixin>
        <a-mixin id="greenText" text="color: #65b731"></a-mixin>
        <a-mixin id="yellowText" text="color: #e0cb49"></a-mixin>
        <a-mixin id="orangeText" text="color: #F85333"></a-mixin>
        <a-mixin id="whiteText" text="color: #DADADA"></a-mixin>
        <a-mixin id="grayText" text="color: #747474"></a-mixin>
        <a-mixin id="buttonHoverColor" menu-hover-color="hoverColor: #324f64"></a-mixin>
        <a-mixin id="iconHoverColor" menu-hover-color="hoverColor: #48BAEA"></a-mixin>
        <a-mixin id="uiSounds" 
                 play-sound__click="sound: https://aframe.io/assets/audio/menuclick.mp3; event: click; volume: 0.3"
                 play-sound__hover="sound: https://aframe.io/assets/audio/menuhover.mp3; event: mouseenter; volume: 0.3"></a-mixin>
        <a-mixin id="uiSoundsCollider" 
                 mixin="uiSounds" 
                 play-sound__click="event: hitclosest"
                 play-sound__hover="event: hitclosestclear"></a-mixin>
        <template data-controller="oculus-touch-controls" data-hand="left">
            <a-entity position="0 -0.04 -0.035" rotation="-40 0 0">
                <a-entity class="controllerBody" mixin="controllerPartOculus" gltf-part="part: left-body"></a-entity>
                <a-entity class="controllerButtonA" mixin="controllerPartOculus"
                          gltf-part="part: left-button-a"></a-entity>
                <a-entity class="controllerButtonB" mixin="controllerPartOculus"
                          gltf-part="part: left-button-b"></a-entity>
                <a-entity class="controllerGrip" mixin="controllerPartOculus red"
                          gltf-part="part: left-grip"></a-entity>
                <a-entity class="controllerThumbstick" mixin="controllerPartOculus gray"
                          gltf-part="part: left-thumbstick"></a-entity>
                <a-entity class="controllerDisk" mixin="controllerPartOculus" gltf-part="part: left-thumbstick-disk"
                          material="shader: flat; color: #EE472B; opacity: 0.75; side: double"></a-entity>
                <a-entity class="controllerTrigger" mixin="controllerPartOculus red"
                          gltf-part="part: left-trigger"></a-entity>
                <a-entity class="controllerIconTeleport" mixin="controllerPartOculus gray"
                          gltf-part="part: c-icon-teleport" bind__visible="tools.teleporterEnabled"
                          bind__super-material-active-color="active: tools.teleporterActive"></a-entity>
                <a-entity id="controllerIconUndo" mixin="controllerPartOculus gray" gltf-part="part: c-icon-undo"
                          bind__visible="tools.undoEnabled" super-material-active-color="active: false"
                          undo-icon=""></a-entity>
                <a-entity id="controllerIconReference" mixin="controllerPartOculus gray"
                          gltf-part="part: c-icon-reference" bind__visible="tools.referenceImageEnabled"
                          bind__super-material-active-color="active: tools.referenceImageActive"></a-entity>
                <a-entity id="controllerIconInventory" mixin="controllerPartOculus gray"
                          gltf-part="part: c-icon-inventory"
                          bind__super-material-active-color="active: tools.inventoryOpen"
                          bind__visible="buildMode"></a-entity>
                <a-entity id="controllerIconCamera" mixin="controllerPartOculus gray" gltf-part="part: left-c-icon-grip"
                          bind__visible="tools.cameraScalerEnabled"></a-entity>
                <a-entity id="controllerTipTeleporter" mixin="controllerPartOculus" gltf-part="part: tip-teleport"
                          bind__visible="tools.teleporterActive"></a-entity>
                <a-entity id="controllerTipScale" mixin="controllerPartOculus" gltf-part="part: tip-scale"
                          bind__visible="tools.airScalerActive"></a-entity>
            </a-entity>
        </template>
        <template data-controller="oculus-touch-controls" data-hand="right">
            <a-entity position="0 -0.04 -0.035" rotation="-40 0 0">
                <a-entity class="controllerBody" mixin="controllerPartOculus" gltf-part="part: right-body"></a-entity>
                <a-entity class="controllerButtonA" mixin="controllerPartOculus"
                          gltf-part="part: right-button-a"></a-entity>
                <a-entity class="controllerButtonB" mixin="controllerPartOculus"
                          gltf-part="part: right-button-b"></a-entity>
                <a-entity class="controllerGrip" mixin="controllerPartOculus red"
                          gltf-part="part: right-grip"></a-entity>
                <a-entity class="controllerThumbstick" mixin="controllerPartOculus gray"
                          gltf-part="part: right-thumbstick"></a-entity>
                <a-entity class="controllerDisk" mixin="controllerPartOculus" gltf-part="part: right-thumbstick-disk"
                          material="shader: flat; color: #EE472B; opacity: 0.75; side: double"></a-entity>
                <a-entity class="controllerTrigger" mixin="controllerPartOculus red"
                          gltf-part="part: right-trigger"></a-entity>
                <a-entity bind__visible="tools.primaryCraftActionsEnabled">
                    <a-entity id="controllerIconGridTransform" mixin="controllerPartOculus gray"
                              gltf-part="part: c-icon-snap"
                              bind__super-material-active-color="active: tools.gridTransformActive"></a-entity>
                    <a-entity id="controllerIconClone" mixin="controllerPartOculus gray" gltf-part="part: c-icon-clone"
                              bind__super-material-active-color="active: tools.clonerActive"></a-entity>
                    <a-entity id="controllerIconDelete" mixin="controllerPartOculus gray"
                              gltf-part="part: c-icon-delete"
                              bind__super-material-active-color="active: tools.deleterActive"></a-entity>
                </a-entity>
                <a-entity id="controllerIconUniformScale" mixin="controllerPartOculus gray"
                          gltf-part="part: c-icon-uniformscale"
                          bind__super-material-active-color="active: tools.uniformScaleActive"
                          bind__visible="tools.uniformScaleEnabled"></a-entity>
                <a-entity id="controllerIconCamera" mixin="controllerPartOculus gray"
                          gltf-part="part: right-c-icon-grip" bind__visible="tools.cameraScalerEnabled"></a-entity>
                <a-entity id="primaryControllerTips">
                    <a-entity id="controllerTipNormal" mixin="controllerPartOculus"
                              bind__visible="tools.tips.normalTipVisible &amp;&amp; !menuFocused"
                              bind__tip-normal="isFocusedEntityTouched: isFocusedEntityTouched"
                              gltf-part="part: tip-normal" tip-normal="highlightColor: #48BAEA"></a-entity>
                    <a-entity id="controllerTipMarker" bind__visible="tools.colorerEnabled">
                        <a-entity mixin="controllerPartOculus" gltf-part="part: tip-marker-body"></a-entity>
                        <a-entity mixin="controllerPartOculus" gltf-part="part: tip-marker-felt"
                                  bind__super-material="color: selectedColor"></a-entity>
                    </a-entity>
                    <a-entity id="controllerTipEraser" bind__visible="tools.deleterActive &amp;&amp; !menuFocused">
                        <a-entity mixin="controllerPartOculus" gltf-part="part: tip-eraser-sides"
                                  super-material="color: #A32118"></a-entity>
                        <a-entity mixin="controllerPartOculus" gltf-part="part: tip-eraser-center"></a-entity>
                    </a-entity>
                    <a-entity id="controllerTipScale" mixin="controllerPartOculus" gltf-part="part: tip-scale"
                              bind__visible="tools.tips.scaleTipVisible &amp;&amp; !menuFocused"></a-entity>
                </a-entity>
            </a-entity>
        </template>
        <template data-controller="vive-controls" data-hand="left">
            <a-entity>
                <a-entity class="controllerBody" mixin="controllerPartVive" gltf-part="part: body"></a-entity>
                <a-entity class="controllerGrip" mixin="controllerPartVive red" gltf-part="part: grip"></a-entity>
                <a-entity class="controllerMenu" mixin="controllerPartVive red" gltf-part="part: menu"></a-entity>
                <a-entity class="controllerTouchpad" mixin="controllerPartVive red"
                          gltf-part="part: touchpad"></a-entity>
                <a-entity class="controllerTrigger" mixin="controllerPartVive red" gltf-part="part: trigger"
                          position="0 -0.004 0.001"></a-entity>
                <a-entity class="controllerIconTeleport" mixin="controllerPartVive gray"
                          gltf-part="part: c-icon-teleport" bind__visible="tools.teleporterEnabled"
                          bind__super-material-active-color="active: tools.teleporterActive"></a-entity>
                <a-entity id="controllerIconUndo" mixin="controllerPartVive gray" gltf-part="part: c-icon-undo"
                          bind__visible="tools.undoEnabled" super-material-active-color="active: false"
                          undo-icon=""></a-entity>
                <a-entity id="controllerIconReference" mixin="controllerPartVive gray"
                          gltf-part="part: c-icon-reference" bind__visible="tools.referenceImageEnabled"
                          bind__super-material-active-color="active: tools.referenceImageActive"></a-entity>
                <a-entity id="controllerIconInventory" mixin="controllerPartVive gray"
                          gltf-part="part: c-icon-inventory"
                          bind__super-material-active-color="active: tools.inventoryOpen"
                          bind__visible="buildMode"></a-entity>
                <a-entity id="controllerIconCamera" mixin="controllerPartVive gray" gltf-part="part: c-icon-grip"
                          bind__visible="tools.cameraScalerEnabled"></a-entity>
                <a-entity id="controllerTipTeleporter" mixin="controllerPartVive" gltf-part="part: tip-teleport"
                          bind__visible="tools.teleporterActive"></a-entity>
                <a-entity id="controllerTipScale" mixin="controllerPartVive" gltf-part="part: tip-scale"
                          bind__visible="tools.airScalerActive"></a-entity>
            </a-entity>
        </template>
        <template data-controller="vive-controls" data-hand="right">
            <a-entity>
                <a-entity class="controllerBody" mixin="controllerPartVive" gltf-part="part: body"></a-entity>
                <a-entity class="controllerGrip" mixin="controllerPartVive red" gltf-part="part: grip"></a-entity>
                <a-entity class="controllerMenu" mixin="controllerPartVive red" gltf-part="part: menu"></a-entity>
                <a-entity class="controllerTouchpad" mixin="controllerPartVive red"
                          gltf-part="part: touchpad"></a-entity>
                <a-entity class="controllerTrigger" mixin="controllerPartVive red" gltf-part="part: trigger"
                          position="0 -0.004 0.001"></a-entity>
                <a-entity bind__visible="tools.primaryCraftActionsEnabled">
                    <a-entity id="controllerIconGridTransform" mixin="controllerPartVive gray"
                              gltf-part="part: c-icon-snap"
                              bind__super-material-active-color="active: tools.gridTransformActive"></a-entity>
                    <a-entity id="controllerIconClone" mixin="controllerPartVive gray" gltf-part="part: c-icon-clone"
                              bind__super-material-active-color="active: tools.clonerActive"></a-entity>
                    <a-entity id="controllerIconDelete" mixin="controllerPartVive gray" gltf-part="part: c-icon-delete"
                              bind__super-material-active-color="active: tools.deleterActive"></a-entity>
                </a-entity>
                <a-entity id="controllerIconUniformScale" mixin="controllerPartVive gray"
                          gltf-part="part: c-icon-uniformscale"
                          bind__super-material-active-color="active: tools.uniformScaleActive"
                          bind__visible="tools.uniformScaleEnabled"></a-entity>
                <a-entity id="controllerIconCamera" mixin="controllerPartVive gray" gltf-part="part: c-icon-grip"
                          bind__visible="tools.cameraScalerEnabled"></a-entity>
                <a-entity id="primaryControllerTips">
                    <a-entity id="controllerTipNormal" mixin="controllerPartVive"
                              bind__visible="tools.tips.normalTipVisible &amp;&amp; !menuFocused"
                              bind__tip-normal="isFocusedEntityTouched: isFocusedEntityTouched"
                              gltf-part="part: tip-normal" tip-normal="highlightColor: #48BAEA"></a-entity>
                    <a-entity id="controllerTipMarker" bind__visible="tools.colorerEnabled">
                        <a-entity mixin="controllerPartVive" gltf-part="part: tip-marker-body"></a-entity>
                        <a-entity mixin="controllerPartVive" gltf-part="part: tip-marker-felt"
                                  bind__super-material="color: selectedColor"></a-entity>
                    </a-entity>
                    <a-entity id="controllerTipEraser" bind__visible="tools.deleterActive &amp;&amp; !menuFocused">
                        <a-entity mixin="controllerPartVive" gltf-part="part: tip-eraser-sides"
                                  super-material="color: #A32118"></a-entity>
                        <a-entity mixin="controllerPartVive" gltf-part="part: tip-eraser-center"></a-entity>
                    </a-entity>
                    <a-entity id="controllerTipScale" mixin="controllerPartVive" gltf-part="part: tip-scale"
                              bind__visible="tools.tips.scaleTipVisible &amp;&amp; !menuFocused"></a-entity>
                </a-entity>
            </a-entity>
        </template>
    </a-assets>
    <a-entity id="laser" obj-model="obj: #laserObj" visible="false"></a-entity>
    <a-entity id="loadingSplash"
              animation="property: components.material.material.opacity; from: 1; to: 0.02; dir: alternate; loop: true; pauseEvents: loadingsplashpause; resumeEvents: loadingsplashstart; dur: 1200; easing: easeInOutCubic"
              bind__loading-splash="isSiteLoading: isSiteLoading" geometry="primitive: plane; width: 3.4; height: 2"
              material="shader: flat; src: #splash; transparent: true" position="0 1.6 -4" loading-splash=""></a-entity>
    <a-entity id="referenceObject" bind__visible="tools.referenceImageActive" visible=""></a-entity>
    <a-mixin id="thing" bind__geometry-merger-init="buildMode: buildMode; playMode: playMode"></a-mixin>
    <a-mixin id="shape" geometry="buffer: false; skipCache: true"></a-mixin>
    <a-entity id="entities" bind__blur-things="isBlurred: craftMode"
              bind__geometry-merger-toggler="enabled: !craftMode; stagedEntityId: stagedEntityId"
              bind__geometry-merger-toggler-container="enabled: playMode"
              bind__render-entities="dirtyIds: dirtyEntityIds"
              bind__script-menu-state-change="state: scriptMenu.activeScriptState"
              bind__staged-entity="scriptMode: scriptMode; stagedEntityId: stagedEntityId"
              bind__super-script-toggler="playMode: playMode"
              bind__visible="!tutorial.active &amp;&amp; !gallery.active &amp;&amp; !isSiteLoading" shadow=""
              blur-things="" geometry-merger-toggler="" geometry-merger="" super-material=""
              geometry-merger-toggler-container="" render-entities="" script-menu-state-change="" staged-entity=""
              super-script-toggler="" visible="">
        <a-entity id="thing0" mixin="thing" class="thing" collidable="" data-geometry-merger-child-count="68"
                  geometry-merger-init="" bind__geometry-merger-init="" geometry-merger="" super-material="">
            <a-entity id="shape0" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape1" super-geometry="" super-material="" data-cloned-from="shape0" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape2" super-geometry="" super-material="" data-cloned-from="shape1" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape3" super-geometry="" super-material="" data-cloned-from="shape2" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape4" super-geometry="" super-material="" data-cloned-from="shape3" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape5" super-geometry="" super-material="" data-cloned-from="shape4" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape6" super-geometry="" super-material="" data-cloned-from="shape5" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape7" super-geometry="" super-material="" data-cloned-from="shape4" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape9" super-geometry="" super-material="" data-cloned-from="shape7" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape10" super-geometry="" super-material="" data-cloned-from="shape9" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape11" super-geometry="" super-material="" data-cloned-from="shape10" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape13" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape14" super-geometry="" super-material="" data-cloned-from="shape13" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape15" super-geometry="" super-material="" data-cloned-from="shape7" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape16" super-geometry="" super-material="" data-cloned-from="shape15" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape17" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape18" super-geometry="" super-material="" data-cloned-from="shape17" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape19" super-geometry="" super-material="" data-cloned-from="shape17" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape20" super-geometry="" super-material="" data-cloned-from="shape19" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape21" super-geometry="" super-material="" data-cloned-from="shape20" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape22" super-geometry="" super-material="" data-cloned-from="shape21" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape23" super-geometry="" super-material="" data-cloned-from="shape22" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape24" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape25" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape27" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape29" super-geometry="" super-material="" data-cloned-from="shape27" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape30" super-geometry="" super-material="" data-cloned-from="shape17" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape31" super-geometry="" super-material="" data-cloned-from="shape30" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape32" super-geometry="" super-material="" data-cloned-from="shape31" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape33" super-geometry="" super-material="" data-cloned-from="shape21" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape34" super-geometry="" super-material="" data-cloned-from="shape33" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape35" super-geometry="" super-material="" data-cloned-from="shape30" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape36" super-geometry="" super-material="" data-cloned-from="shape31" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape37" super-geometry="" super-material="" data-cloned-from="shape32" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape38" super-geometry="" super-material="" data-cloned-from="shape33" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape39" super-geometry="" super-material="" data-cloned-from="shape16" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape43" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape44" super-geometry="" super-material="" data-cloned-from="shape39" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape45" super-geometry="" super-material="" data-cloned-from="shape44" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape46" super-geometry="" super-material="" data-cloned-from="shape43" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape47" super-geometry="" super-material="" data-cloned-from="shape45" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape48" super-geometry="" super-material="" data-cloned-from="shape47" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape49" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape50" super-geometry="" super-material="" data-cloned-from="shape49" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape51" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape52" super-geometry="" super-material="" data-cloned-from="shape51" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape53" super-geometry="" super-material="" data-cloned-from="shape13" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape54" super-geometry="" super-material="" data-cloned-from="shape13" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape55" super-geometry="" super-material="" data-cloned-from="shape54" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape57" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape58" super-geometry="" super-material="" data-cloned-from="shape57" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape59" super-geometry="" super-material="" data-cloned-from="shape58" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape60" super-geometry="" super-material="" data-cloned-from="shape59" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape61" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape62" super-geometry="" super-material="" data-cloned-from="shape61" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape63" super-geometry="" super-material="" data-cloned-from="shape62" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape64" super-geometry="" super-material="" data-cloned-from="shape63" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape65" super-geometry="" super-material="" data-cloned-from="shape64" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape66" super-geometry="" super-material="" data-cloned-from="shape65" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape67" super-geometry="" super-material="" data-cloned-from="shape61" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape69" super-geometry="" super-material="" data-cloned-from="shape68" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape70" super-geometry="" super-material="" data-cloned-from="shape68" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape71" super-geometry="" super-material="" data-cloned-from="shape67" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape72" super-geometry="" super-material="" data-cloned-from="shape71" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape73" super-geometry="" super-material="" data-cloned-from="shape61" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape74" super-geometry="" super-material="" data-cloned-from="shape73" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape75" super-geometry="" super-material="" data-cloned-from="shape74" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape76" super-geometry="" super-material="" data-cloned-from="shape75" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing1" mixin="thing" class="thing" collidable="" data-geometry-merger-child-count="61"
                  geometry-merger-init="" bind__geometry-merger-init="" geometry-merger="" super-material="">
            <a-entity id="shape78" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape79" super-geometry="" super-material="" data-cloned-from="shape78" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape80" super-geometry="" super-material="" data-cloned-from="shape79" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape81" super-geometry="" super-material="" data-cloned-from="shape80" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape82" super-geometry="" super-material="" data-cloned-from="shape81" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape83" super-geometry="" super-material="" data-cloned-from="shape82" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape84" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape85" super-geometry="" super-material="" data-cloned-from="shape84" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape86" super-geometry="" super-material="" data-cloned-from="shape85" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape87" super-geometry="" super-material="" data-cloned-from="shape86" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape88" super-geometry="" super-material="" data-cloned-from="shape87" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape89" super-geometry="" super-material="" data-cloned-from="shape88" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape90" super-geometry="" super-material="" data-cloned-from="shape89" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape91" super-geometry="" super-material="" data-cloned-from="shape90" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape92" super-geometry="" super-material="" data-cloned-from="shape91" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape93" super-geometry="" super-material="" data-cloned-from="shape92" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape94" super-geometry="" super-material="" data-cloned-from="shape93" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape95" super-geometry="" super-material="" data-cloned-from="shape94" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape96" super-geometry="" super-material="" data-cloned-from="shape90" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape97" super-geometry="" super-material="" data-cloned-from="shape96" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape98" super-geometry="" super-material="" data-cloned-from="shape97" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape99" super-geometry="" super-material="" data-cloned-from="shape84" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape100" super-geometry="" super-material="" data-cloned-from="shape99" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape101" super-geometry="" super-material="" data-cloned-from="shape100" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape102" super-geometry="" super-material="" data-cloned-from="shape101" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape103" super-geometry="" super-material="" data-cloned-from="shape102" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape104" super-geometry="" super-material="" data-cloned-from="shape103" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape105" super-geometry="" super-material="" data-cloned-from="shape81" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape106" super-geometry="" super-material="" data-cloned-from="shape105" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape107" super-geometry="" super-material="" data-cloned-from="shape106" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape108" super-geometry="" super-material="" data-cloned-from="shape105" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape109" super-geometry="" super-material="" data-cloned-from="shape108" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape110" super-geometry="" super-material="" data-cloned-from="shape109" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape111" super-geometry="" super-material="" data-cloned-from="shape105" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape112" super-geometry="" super-material="" data-cloned-from="shape111" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape113" super-geometry="" super-material="" data-cloned-from="shape112" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape114" super-geometry="" super-material="" data-cloned-from="shape111" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape115" super-geometry="" super-material="" data-cloned-from="shape112" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape116" super-geometry="" super-material="" data-cloned-from="shape111" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape117" super-geometry="" super-material="" data-cloned-from="shape116" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape118" super-geometry="" super-material="" data-cloned-from="shape117" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape119" super-geometry="" super-material="" data-cloned-from="shape118" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape120" super-geometry="" super-material="" data-cloned-from="shape119" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape121" super-geometry="" super-material="" data-cloned-from="shape120" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape122" super-geometry="" super-material="" data-cloned-from="shape121" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape123" super-geometry="" super-material="" data-cloned-from="shape122" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape124" super-geometry="" super-material="" data-cloned-from="shape122" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape128" super-geometry="" super-material="" data-cloned-from="shape127" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape129" super-geometry="" super-material="" data-cloned-from="shape128" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape131" super-geometry="" super-material="" data-cloned-from="shape116" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape132" super-geometry="" super-material="" data-cloned-from="shape118" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape345" super-geometry="" super-material="" data-cloned-from="shape81" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape347" super-geometry="" super-material="" data-cloned-from="shape345" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape348" super-geometry="" super-material="" data-cloned-from="shape347" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape349" super-geometry="" super-material="" data-cloned-from="shape348" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape350" super-geometry="" super-material="" data-cloned-from="shape349" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape351" super-geometry="" super-material="" data-cloned-from="shape350" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape352" super-geometry="" super-material="" data-cloned-from="shape351" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape353" super-geometry="" super-material="" data-cloned-from="shape352" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape354" super-geometry="" super-material="" data-cloned-from="shape353" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape355" super-geometry="" super-material="" data-cloned-from="shape354" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing2" mixin="thing" class="thing" collidable="" data-geometry-merger-child-count="14"
                  geometry-merger-init="" bind__geometry-merger-init="" geometry-merger="" super-material="">
            <a-entity id="shape134" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape135" super-geometry="" super-material="" data-cloned-from="shape134" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape136" super-geometry="" super-material="" data-cloned-from="shape135" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape137" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape138" super-geometry="" super-material="" data-cloned-from="shape137" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape139" super-geometry="" super-material="" data-cloned-from="shape138" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape141" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape142" super-geometry="" super-material="" data-cloned-from="shape141" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape143" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape144" super-geometry="" super-material="" data-cloned-from="shape143" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape145" super-geometry="" super-material="" data-cloned-from="shape144" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape146" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape147" super-geometry="" super-material="" data-cloned-from="shape146" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape148" super-geometry="" super-material="" data-cloned-from="shape147" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing3" data-cloned-from="thing2" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape149" super-geometry="" super-material="" data-cloned-from="shape134" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape150" super-geometry="" super-material="" data-cloned-from="shape135" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape151" super-geometry="" super-material="" data-cloned-from="shape136" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape152" super-geometry="" super-material="" data-cloned-from="shape137" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape153" super-geometry="" super-material="" data-cloned-from="shape138" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape154" super-geometry="" super-material="" data-cloned-from="shape139" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape155" super-geometry="" super-material="" data-cloned-from="shape141" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape156" super-geometry="" super-material="" data-cloned-from="shape142" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape157" super-geometry="" super-material="" data-cloned-from="shape143" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape158" super-geometry="" super-material="" data-cloned-from="shape144" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape159" super-geometry="" super-material="" data-cloned-from="shape145" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape160" super-geometry="" super-material="" data-cloned-from="shape146" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape161" super-geometry="" super-material="" data-cloned-from="shape147" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape162" super-geometry="" super-material="" data-cloned-from="shape148" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing4" data-cloned-from="thing3" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape163" super-geometry="" super-material="" data-cloned-from="shape149" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape164" super-geometry="" super-material="" data-cloned-from="shape150" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape165" super-geometry="" super-material="" data-cloned-from="shape151" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape166" super-geometry="" super-material="" data-cloned-from="shape152" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape167" super-geometry="" super-material="" data-cloned-from="shape153" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape168" super-geometry="" super-material="" data-cloned-from="shape154" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape169" super-geometry="" super-material="" data-cloned-from="shape155" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape170" super-geometry="" super-material="" data-cloned-from="shape156" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape171" super-geometry="" super-material="" data-cloned-from="shape157" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape172" super-geometry="" super-material="" data-cloned-from="shape158" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape173" super-geometry="" super-material="" data-cloned-from="shape159" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape174" super-geometry="" super-material="" data-cloned-from="shape160" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape175" super-geometry="" super-material="" data-cloned-from="shape161" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape176" super-geometry="" super-material="" data-cloned-from="shape162" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing5" data-cloned-from="thing4" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape177" super-geometry="" super-material="" data-cloned-from="shape163" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape178" super-geometry="" super-material="" data-cloned-from="shape164" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape179" super-geometry="" super-material="" data-cloned-from="shape165" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape180" super-geometry="" super-material="" data-cloned-from="shape166" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape181" super-geometry="" super-material="" data-cloned-from="shape167" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape182" super-geometry="" super-material="" data-cloned-from="shape168" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape183" super-geometry="" super-material="" data-cloned-from="shape169" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape184" super-geometry="" super-material="" data-cloned-from="shape170" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape185" super-geometry="" super-material="" data-cloned-from="shape171" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape186" super-geometry="" super-material="" data-cloned-from="shape172" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape187" super-geometry="" super-material="" data-cloned-from="shape173" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape188" super-geometry="" super-material="" data-cloned-from="shape174" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape189" super-geometry="" super-material="" data-cloned-from="shape175" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape190" super-geometry="" super-material="" data-cloned-from="shape176" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing6" data-cloned-from="thing5" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape191" super-geometry="" super-material="" data-cloned-from="shape177" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape192" super-geometry="" super-material="" data-cloned-from="shape178" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape193" super-geometry="" super-material="" data-cloned-from="shape179" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape194" super-geometry="" super-material="" data-cloned-from="shape180" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape195" super-geometry="" super-material="" data-cloned-from="shape181" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape196" super-geometry="" super-material="" data-cloned-from="shape182" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape197" super-geometry="" super-material="" data-cloned-from="shape183" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape198" super-geometry="" super-material="" data-cloned-from="shape184" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape199" super-geometry="" super-material="" data-cloned-from="shape185" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape200" super-geometry="" super-material="" data-cloned-from="shape186" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape201" super-geometry="" super-material="" data-cloned-from="shape187" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape202" super-geometry="" super-material="" data-cloned-from="shape188" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape203" super-geometry="" super-material="" data-cloned-from="shape189" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape204" super-geometry="" super-material="" data-cloned-from="shape190" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing7" data-cloned-from="thing6" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape205" super-geometry="" super-material="" data-cloned-from="shape191" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape206" super-geometry="" super-material="" data-cloned-from="shape192" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape207" super-geometry="" super-material="" data-cloned-from="shape193" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape208" super-geometry="" super-material="" data-cloned-from="shape194" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape209" super-geometry="" super-material="" data-cloned-from="shape195" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape210" super-geometry="" super-material="" data-cloned-from="shape196" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape211" super-geometry="" super-material="" data-cloned-from="shape197" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape212" super-geometry="" super-material="" data-cloned-from="shape198" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape213" super-geometry="" super-material="" data-cloned-from="shape199" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape214" super-geometry="" super-material="" data-cloned-from="shape200" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape215" super-geometry="" super-material="" data-cloned-from="shape201" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape216" super-geometry="" super-material="" data-cloned-from="shape202" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape217" super-geometry="" super-material="" data-cloned-from="shape203" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape218" super-geometry="" super-material="" data-cloned-from="shape204" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing8" data-cloned-from="thing7" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape219" super-geometry="" super-material="" data-cloned-from="shape205" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape220" super-geometry="" super-material="" data-cloned-from="shape206" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape221" super-geometry="" super-material="" data-cloned-from="shape207" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape222" super-geometry="" super-material="" data-cloned-from="shape208" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape223" super-geometry="" super-material="" data-cloned-from="shape209" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape224" super-geometry="" super-material="" data-cloned-from="shape210" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape225" super-geometry="" super-material="" data-cloned-from="shape211" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape226" super-geometry="" super-material="" data-cloned-from="shape212" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape227" super-geometry="" super-material="" data-cloned-from="shape213" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape228" super-geometry="" super-material="" data-cloned-from="shape214" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape229" super-geometry="" super-material="" data-cloned-from="shape215" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape230" super-geometry="" super-material="" data-cloned-from="shape216" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape231" super-geometry="" super-material="" data-cloned-from="shape217" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape232" super-geometry="" super-material="" data-cloned-from="shape218" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing9" data-cloned-from="thing8" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape233" super-geometry="" super-material="" data-cloned-from="shape219" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape234" super-geometry="" super-material="" data-cloned-from="shape220" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape235" super-geometry="" super-material="" data-cloned-from="shape221" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape236" super-geometry="" super-material="" data-cloned-from="shape222" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape237" super-geometry="" super-material="" data-cloned-from="shape223" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape238" super-geometry="" super-material="" data-cloned-from="shape224" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape239" super-geometry="" super-material="" data-cloned-from="shape225" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape240" super-geometry="" super-material="" data-cloned-from="shape226" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape241" super-geometry="" super-material="" data-cloned-from="shape227" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape242" super-geometry="" super-material="" data-cloned-from="shape228" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape243" super-geometry="" super-material="" data-cloned-from="shape229" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape244" super-geometry="" super-material="" data-cloned-from="shape230" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape245" super-geometry="" super-material="" data-cloned-from="shape231" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape246" super-geometry="" super-material="" data-cloned-from="shape232" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing10" data-cloned-from="thing9" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape247" super-geometry="" super-material="" data-cloned-from="shape233" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape248" super-geometry="" super-material="" data-cloned-from="shape234" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape249" super-geometry="" super-material="" data-cloned-from="shape235" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape250" super-geometry="" super-material="" data-cloned-from="shape236" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape251" super-geometry="" super-material="" data-cloned-from="shape237" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape252" super-geometry="" super-material="" data-cloned-from="shape238" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape253" super-geometry="" super-material="" data-cloned-from="shape239" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape254" super-geometry="" super-material="" data-cloned-from="shape240" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape255" super-geometry="" super-material="" data-cloned-from="shape241" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape256" super-geometry="" super-material="" data-cloned-from="shape242" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape257" super-geometry="" super-material="" data-cloned-from="shape243" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape258" super-geometry="" super-material="" data-cloned-from="shape244" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape259" super-geometry="" super-material="" data-cloned-from="shape245" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape260" super-geometry="" super-material="" data-cloned-from="shape246" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing11" data-cloned-from="thing10" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape261" super-geometry="" super-material="" data-cloned-from="shape247" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape262" super-geometry="" super-material="" data-cloned-from="shape248" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape263" super-geometry="" super-material="" data-cloned-from="shape249" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape264" super-geometry="" super-material="" data-cloned-from="shape250" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape265" super-geometry="" super-material="" data-cloned-from="shape251" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape266" super-geometry="" super-material="" data-cloned-from="shape252" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape267" super-geometry="" super-material="" data-cloned-from="shape253" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape268" super-geometry="" super-material="" data-cloned-from="shape254" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape269" super-geometry="" super-material="" data-cloned-from="shape255" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape270" super-geometry="" super-material="" data-cloned-from="shape256" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape271" super-geometry="" super-material="" data-cloned-from="shape257" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape272" super-geometry="" super-material="" data-cloned-from="shape258" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape273" super-geometry="" super-material="" data-cloned-from="shape259" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape274" super-geometry="" super-material="" data-cloned-from="shape260" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing12" data-cloned-from="thing11" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape275" super-geometry="" super-material="" data-cloned-from="shape261" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape276" super-geometry="" super-material="" data-cloned-from="shape262" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape277" super-geometry="" super-material="" data-cloned-from="shape263" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape278" super-geometry="" super-material="" data-cloned-from="shape264" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape279" super-geometry="" super-material="" data-cloned-from="shape265" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape280" super-geometry="" super-material="" data-cloned-from="shape266" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape281" super-geometry="" super-material="" data-cloned-from="shape267" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape282" super-geometry="" super-material="" data-cloned-from="shape268" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape283" super-geometry="" super-material="" data-cloned-from="shape269" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape284" super-geometry="" super-material="" data-cloned-from="shape270" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape285" super-geometry="" super-material="" data-cloned-from="shape271" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape286" super-geometry="" super-material="" data-cloned-from="shape272" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape287" super-geometry="" super-material="" data-cloned-from="shape273" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape288" super-geometry="" super-material="" data-cloned-from="shape274" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing13" data-cloned-from="thing12" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape289" super-geometry="" super-material="" data-cloned-from="shape275" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape290" super-geometry="" super-material="" data-cloned-from="shape276" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape291" super-geometry="" super-material="" data-cloned-from="shape277" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape292" super-geometry="" super-material="" data-cloned-from="shape278" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape293" super-geometry="" super-material="" data-cloned-from="shape279" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape294" super-geometry="" super-material="" data-cloned-from="shape280" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape295" super-geometry="" super-material="" data-cloned-from="shape281" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape296" super-geometry="" super-material="" data-cloned-from="shape282" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape297" super-geometry="" super-material="" data-cloned-from="shape283" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape298" super-geometry="" super-material="" data-cloned-from="shape284" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape299" super-geometry="" super-material="" data-cloned-from="shape285" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape300" super-geometry="" super-material="" data-cloned-from="shape286" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape301" super-geometry="" super-material="" data-cloned-from="shape287" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape302" super-geometry="" super-material="" data-cloned-from="shape288" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing14" data-cloned-from="thing13" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape303" super-geometry="" super-material="" data-cloned-from="shape289" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape304" super-geometry="" super-material="" data-cloned-from="shape290" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape305" super-geometry="" super-material="" data-cloned-from="shape291" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape306" super-geometry="" super-material="" data-cloned-from="shape292" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape307" super-geometry="" super-material="" data-cloned-from="shape293" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape308" super-geometry="" super-material="" data-cloned-from="shape294" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape309" super-geometry="" super-material="" data-cloned-from="shape295" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape310" super-geometry="" super-material="" data-cloned-from="shape296" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape311" super-geometry="" super-material="" data-cloned-from="shape297" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape312" super-geometry="" super-material="" data-cloned-from="shape298" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape313" super-geometry="" super-material="" data-cloned-from="shape299" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape314" super-geometry="" super-material="" data-cloned-from="shape300" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape315" super-geometry="" super-material="" data-cloned-from="shape301" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape316" super-geometry="" super-material="" data-cloned-from="shape302" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing15" data-cloned-from="thing14" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape317" super-geometry="" super-material="" data-cloned-from="shape303" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape318" super-geometry="" super-material="" data-cloned-from="shape304" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape319" super-geometry="" super-material="" data-cloned-from="shape305" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape320" super-geometry="" super-material="" data-cloned-from="shape306" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape321" super-geometry="" super-material="" data-cloned-from="shape307" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape322" super-geometry="" super-material="" data-cloned-from="shape308" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape323" super-geometry="" super-material="" data-cloned-from="shape309" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape324" super-geometry="" super-material="" data-cloned-from="shape310" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape325" super-geometry="" super-material="" data-cloned-from="shape311" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape326" super-geometry="" super-material="" data-cloned-from="shape312" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape327" super-geometry="" super-material="" data-cloned-from="shape313" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape328" super-geometry="" super-material="" data-cloned-from="shape314" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape329" super-geometry="" super-material="" data-cloned-from="shape315" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape330" super-geometry="" super-material="" data-cloned-from="shape316" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing16" data-cloned-from="thing15" mixin="thing" class="thing" collidable=""
                  data-geometry-merger-child-count="14" geometry-merger-init="" bind__geometry-merger-init=""
                  geometry-merger="" super-material="">
            <a-entity id="shape331" super-geometry="" super-material="" data-cloned-from="shape317" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape332" super-geometry="" super-material="" data-cloned-from="shape318" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape333" super-geometry="" super-material="" data-cloned-from="shape319" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape334" super-geometry="" super-material="" data-cloned-from="shape320" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape335" super-geometry="" super-material="" data-cloned-from="shape321" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape336" super-geometry="" super-material="" data-cloned-from="shape322" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape337" super-geometry="" super-material="" data-cloned-from="shape323" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape338" super-geometry="" super-material="" data-cloned-from="shape324" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape339" super-geometry="" super-material="" data-cloned-from="shape325" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape340" super-geometry="" super-material="" data-cloned-from="shape326" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape341" super-geometry="" super-material="" data-cloned-from="shape327" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape342" super-geometry="" super-material="" data-cloned-from="shape328" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape343" super-geometry="" super-material="" data-cloned-from="shape329" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape344" super-geometry="" super-material="" data-cloned-from="shape330" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
        <a-entity id="thing17" mixin="thing" class="thing" collidable="" data-geometry-merger-child-count="8"
                  geometry-merger-init="" bind__geometry-merger-init="" geometry-merger="" super-material="">
            <a-entity id="shape356" super-geometry="" super-material="" class="shape" mixin="shape" geometry=""
                      face-colors=""></a-entity>
            <a-entity id="shape357" super-geometry="" super-material="" data-cloned-from="shape356" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape358" super-geometry="" super-material="" data-cloned-from="shape357" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape359" super-geometry="" super-material="" data-cloned-from="shape358" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape360" super-geometry="" super-material="" data-cloned-from="shape359" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape361" super-geometry="" super-material="" data-cloned-from="shape360" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape362" super-geometry="" super-material="" data-cloned-from="shape359" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
            <a-entity id="shape363" super-geometry="" super-material="" data-cloned-from="shape362" class="shape"
                      mixin="shape" geometry="" face-colors=""></a-entity>
        </a-entity>
    </a-entity>
    <a-mixin id="controllerPartOculus" gltf-part="src: #controllerOculus; buffer: true" super-material="color: #EFEFEF"
             vertex-colors-buffer="itemSize: 4"></a-mixin>
    <a-mixin id="controllerPartVive" gltf-part="src: #controllerVive; buffer: true" super-material="color: #EFEFEF"
             vertex-colors-buffer="itemSize: 4"></a-mixin>
    <a-mixin id="red" super-material="color: #EE472B" vertex-colors-buffer="itemSize: 4"></a-mixin>
    <a-mixin id="gray" super-material="color: #282828" vertex-colors-buffer="itemSize: 4"></a-mixin>
    <a-mixin id="white" super-material="color: #EFEFEF" vertex-colors-buffer="itemSize: 4"></a-mixin>
    <a-entity id="teleportFader" geometry="primitive: box" material="color: #111; shader: flat; side: back"
              visible="false"></a-entity>
    <a-entity id="cameraRig">
        <a-entity id="camera" camera="" look-controls="enabled: false"
                  orbit-controls="target: 0 1.6 -0.5; minDistance: 0.25; maxDistance: 180; initialPosition: 0 1.6 0"
                  position="" rotation=""></a-entity>
        <a-entity id="videoTutorialGroup" position="0 1.6 -3" bind__visible="tutorial.active" visible="">
            <a-video id="videoTutorial" src="#tutorialVideo" width="4" height="3" scale="0.8 0.8 0.8" material=""
                     geometry=""></a-video>
            <a-entity id="videoTutorialPlay" mixin="uiSounds menuIcon" menu-icon="type: play" position="-0 -1.050 0.01"
                      scale="8 8 8" play-sound__click="" play-sound__hover="" geometry="" menu-hover-color=""
                      raycaster-target="" face-colors="" super-material="" super-material-active-color=""
                      plane-grid-uvs="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
            <a-entity id="videoTutorialPause" mixin="uiSounds menuIcon" menu-icon="type: pause"
                      position="-0 -1.050 -0.01" scale="8 8 8" play-sound__click="" play-sound__hover="" geometry=""
                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                      super-material-active-color="" plane-grid-uvs="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
            <a-entity id="videoTutorialRewind" mixin="uiSounds menuIcon" menu-icon="type: rewind"
                      position="-0.6 -1.050 0.01" scale="8 8 8" play-sound__click="" play-sound__hover="" geometry=""
                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                      super-material-active-color="" plane-grid-uvs="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
            <a-entity id="videoTutorialForward" mixin="uiSounds menuIcon" menu-icon="type: rewind"
                      position="0.6 -1.050 0.01" scale="-8 8 8" play-sound__click="" play-sound__hover="" geometry=""
                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                      super-material-active-color="" plane-grid-uvs="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
        </a-entity>
        <a-entity id="primaryHand" bind__air-scaler-starter="enabled: tools.airScalerActive"
                  bind__camera-scaler-hand="hand: handPrimary"
                  bind__cloner="enabled: tools.clonerEnabled &amp;&amp; tools.primaryCraftActionsEnabled"
                  bind__controller="controllerType: controller; handPrimary: handPrimary"
                  bind__deleter="enabled: tools.deleterEnabled"
                  bind__grid-transform-toggler="enabled: tools.gridTransformTogglerEnabled"
                  bind__grabber="cameraScaleFactor: cameraScaleFactor; entityId: grabbedEntityId; focusedEntityId: focusedEntityId; gridTransform: tools.gridTransformActive; isClonerActive: tools.clonerActive; triggerGrabEnabled: tools.grabberEnabled &amp;&amp; !menuFocused"
                  bind__inventory-dropper="enabled: playMode; focusedEntityId: focusedEntityId"
                  bind__inventory-grabber="cameraScaleFactor: cameraScaleFactor; enabled: buildMode &amp;&amp; inventory.open; grabPosition: grabPosition"
                  bind__selector="enabled: tools.selectorEnabled; playMode: playMode"
                  bind__scaler="cameraScaleFactor: cameraScaleFactor; enabled: tools.scalerEnabled; entityId: focusedEntityId; gridTransform: tools.gridTransformActive"
                  bind__shape-adder="shapeType: selectedShape" controller="hand: right" controller-button-feedback=""
                  haptics__primary="events: mouseenter, colorentity, touchentitystart; dur: 35; force: 0.075"
                  play-sound__grab="sound: https://aframe.io/assets/audio/grab.mp3; event: grab; volume: 0.2"
                  play-sound__ungrab="sound: https://aframe.io/assets/audio/grab.mp3; event: ungrab; volume: 0.3" thumb-controls=""
                  tracked-controls="autoHide: false" tracked-controls-webvr="" air-scaler-starter=""
                  camera-scaler-hand="" cloner="" oculus-touch-controls="" vive-controls="" windows-motion-controls=""
                  deleter="" grid-transform-toggler="" grabber="" inventory-dropper="" inventory-grabber="" selector=""
                  scaler="">
            <a-entity class="controllerModel" shadow="cast: true; receive: false"></a-entity>
            <a-entity id="menuRaycaster" class="raycaster"
                      bind__menu-raycaster="cameraScaleFactor: cameraScaleFactor; enabled: tools.menuRaycasterEnabled &amp;&amp; !isFocusedEntityTouched &amp;&amp; !tools.airScalerActive &amp;&amp; !isGrabbingToInventory &amp;&amp; !gallery.active"
                      bind__raycaster="enabled: !isFocusedEntityTouched"
                      cursor="downEvents: triggerdown; upEvents: triggerup" menu-raycaster="laser: #menuLaser"
                      menu-tooltip="" proxy-event__1="event: triggerdown; from: PARENT"
                      proxy-event__2="event: triggerup; from: PARENT"
                      raycaster="far: 0.1; objects: #menuContainer a-entity[raycastable]; showLine: false">
                <a-entity id="menuLaser" class="laser" bind__laser="cameraScaleFactor: cameraScaleFactor"
                          visible="false" laser="">
                    <a-entity class="laserMesh" geometry="primitive: cone; radiusBottom: 0.002; radiusTop: 0.001"
                              material="shader: laser; color: #44CBBF; transparent: true"
                              position="0 -0.5 0"></a-entity>
                </a-entity>
            </a-entity>
            <a-entity id="entityRaycaster" class="raycaster"
                      bind__colorer="enabled: tools.colorerEnabled; color: selectedColor"
                      bind__entity-raycaster="cameraScaleFactor: cameraScaleFactor; colorerEnabled: tools.colorerEnabled; craftMode: craftMode; enabled: isVRMode &amp;&amp; !menuFocused &amp;&amp; !gallery.active"
                      cursor="downEvents: triggerdown; upEvents: triggerup"
                      proxy-event__1="event: triggerdown; from: PARENT" proxy-event__2="event: triggerup; from: PARENT"
                      raycaster="far: 0.055; recursive: false; showLine: false" colorer="" entity-raycaster="" line="">
                <a-entity id="entityLaser" class="laser" bind__laser="cameraScaleFactor: cameraScaleFactor"
                          bind__visible="tools.colorerEnabled &amp;&amp; !menuFocused" laser="" visible="">
                    <a-entity class="laserMesh" geometry="primitive: cone; radiusBottom: 0.001; radiusTop: 0.003"
                              super-material="type: faded" bind__super-material="color: selectedColor"
                              position="0 -0.5 0" vertex-colors-buffer=""></a-entity>
                </a-entity>
            </a-entity>
            <a-entity id="worldUIRaycaster" class="raycaster" bind__tutorial-cursor="enabled: tutorial.active"
                      cursor="downEvents: triggerdown; upEvents: triggerup"
                      proxy-event__1="event: triggerdown; from: PARENT" proxy-event__2="event: triggerup; from: PARENT"
                      raycaster="far: 10; objects: #videoTutorialGroup [raycastable], #gallery [raycastable]; showLine: true"
                      bind__raycaster="enabled: tutorial.active || gallery.active &amp;&amp; !menuFocused; showLine: tutorial.active || gallery.active &amp;&amp; !menuFocused"
                      tutorial-cursor=""></a-entity>
            <a-entity id="collider" class="collider"
                      aabb-collider="objects: #menuBoundingBox, [data-focused-entity]; interval: 10"
                      collider-highlight="enabled: buildMode || craftMode" material="shader: flat; visible: false"
                      position="0 -0.012 0.04"></a-entity>
        </a-entity>
        <a-entity id="secondaryHand" bind__air-scaler-activator="enabled: tools.airScalerEnabled"
                  bind__camera-scaler-hand="hand: handSecondary"
                  bind__controller="controllerType: controller; handPrimary: handPrimary"
                  bind__haptics__undo="enabled: tools.undoEnabled" bind__teleporter="enabled: tools.teleporterEnabled"
                  bind__proxy-event__inventoryon="enabled: buildMode"
                  bind__proxy-event__inventoryoff="enabled: buildMode" controller="hand: left"
                  controller-button-feedback=""
                  haptics__reference="enabled: false; events: referenceimageopen; dur: 35; force: 0.075"
                  haptics__secondary="events: teleportend; dur: 35; force: 0.075"
                  haptics__undo="enabled: false; events: thumbleftstart; dur: 35; force: 0.075" menu-button-switcher=""
                  proxy-event__inventoryon="event: thumbdownstart; to: a-scene; as: inventoryopen"
                  proxy-event__inventoryoff="event: thumbdownend; to: a-scene; as: inventoryclose"
                  proxy-event__undo="event: thumbleftstart; to: a-scene; as: undo" reference-image-toggler=""
                  teleport-controls="type: line; collisionEntities: .environmentGround, #entities; endEvents: teleporterend; startEvents: teleporterstart; cameraRig: #cameraRig; teleportOrigin: #camera; landingMaxAngle: 360; checkCollisionChildren: false; hitEntityAlignNormal: false; hitCylinderColor: #A1B5D8; curveHitColor: #A1B5D8; curveMissColor: #AAA"
                  teleport-listener="" thumb-controls="" tracked-controls="autoHide: false" air-scaler-activator=""
                  camera-scaler-hand="" oculus-touch-controls="" vive-controls="" windows-motion-controls=""
                  tracked-controls-webvr="" teleporter="">
            <a-entity class="controllerModel" shadow="cast: true; receive: false"></a-entity>
            <a-mixin id="menu" menu=""></a-mixin>
            <a-mixin id="menuSection" menu-section=""></a-mixin>
            <a-mixin id="menuIcon" mixin="uiSounds"
                     geometry="width: 0.03; height: 0.03; primitive: plane; buffer: false; skipCache: true"
                     menu-hover-color="" raycaster-target="width: 0.05; height: 0.05"
                     super-material="type: menuIcon; color: #717171"
                     super-material-active-color="activeColor: #48BAEA"></a-mixin>
            <a-mixin id="menuButton" mixin="uiSounds" data-raycastable="" menu-button="" menu-hover-color=""
                     slice9="height: 0.036; width: 0.164" super-material="color: #030303"></a-mixin>
            <a-mixin id="slice"
                     slice9="usingCustomMaterial: true; usingAtlas: true; uvAtlasMin: 0 0.625; uvAtlasMax: 0.125 0.750; left: .3515625; top: .3515625; bottom: .671875; right: .671875; padding: 0.01"
                     super-material="type: menuIcon; color: #171717" data-raycastable=""></a-mixin>
            <a-entity id="menuContainer" bind__menu-handedness="hand: handSecondary"
                      bind__visible="!!controller &amp;&amp; !tools.airScalerActive &amp;&amp; !gallery.active"
                      menu-container-click-listener=""
                      menu-handedness="hand: left; leftPositionX: 0.155; rightPositionX: -0.155" visible="">
                <a-entity id="menuBoundingBox" geometry="primitive: box; depth: 0.15; height: 0.15; width: 0.5"
                          material="shader: flat; visible: false" position="0 0 0.1" collidable=""></a-entity>
                <a-entity id="referenceImage" reference-image="" geometry="primitive: plane; height: 0.1; width: 0.1"
                          material="shader: flat" bind__visible="tools.referenceImageActive" visible=""></a-entity>
                <a-entity id="inventory"
                          bind__inventory="isFocused: isGrabbingToInventory &amp;&amp; menuBoundingBoxTouched"
                          bind__visible="isGrabbingToInventory || inventory.open"
                          bind-toggle__raycastable="inventory.open"
                          proxy-event__1="event: inventoryfocusfeedbackstart; to: #inventoryPlane"
                          proxy-event__2="event: inventoryfocusfeedbackend; to: #inventoryPlane" position="0.08 0 0"
                          inventory="" visible="">
                    <a-entity id="inventoryPlane"
                              animation__inventoryfocus="property: components.material.material.color; type: color; from: #111; to: #333; dir: alternate; loop: true; dur: 1000; easing: easeInOutCubic; startEvents: inventoryfocusfeedbackstart; pauseEvents: inventoryfocusfeedbackend"
                              geometry="primitive: box; depth: 0.25; height: 0.01; width: 0.35"
                              material="color: #111; shader: flat" rotation="90 0 0"></a-entity>
                    <a-entity id="inventoryItems" bind-for="for: uuid; in: inventoryItems"
                              layout="type: box; columns: 5; marginColumn: 0.065; marginRow: -0.065; plane: xy"
                              position="-0.13 0 0.025"
                              paginator="numPerPage: 15; pagePositionOffset: 0.075; pagePositionShift: 0.195"
                              bind__paginator="active: buildMode &amp;&amp; inventory.open; page: inventory.page">
                        <template>
                            <a-entity class="inventoryItem" inventory-item="uuid: {{ uuid }}"></a-entity>
                        </template>
                    </a-entity>
                    <a-entity id="inventoryPagination" position="0 -0.102 0.01">
                        <a-entity id="inventoryPrevPage" mixin="uiSounds menuIcon" position="-0.15 0 0"
                                  data-title="Previous page" bind__visible="inventory.hasPrev"
                                  menu-hover-color="hoverColor: #48BAEA" menu-icon="type: back"
                                  bind-toggle__raycastable="inventory.hasPrev &amp;&amp; inventory.open"
                                  proxy-event="event: click; to: a-scene; as: inventoryprevpage; captureBubbles: true"
                                  play-sound__click="" play-sound__hover="" geometry="" raycaster-target=""
                                  face-colors="" super-material="" super-material-active-color="" visible=""
                                  plane-grid-uvs="">
                            <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
                        </a-entity>
                        <a-entity id="inventoryNextPage" mixin="uiSounds menuIcon"
                                  menu-hover-color="hoverColor: #48BAEA" menu-icon="type: back" rotation="0 0 180"
                                  position="0.15 0 0" data-title="Next page" bind__visible="inventory.hasNext"
                                  bind-toggle__raycastable="inventory.hasNext &amp;&amp; inventory.open"
                                  proxy-event="event: click; to: a-scene; as: inventorynextpage; captureBubbles: true"
                                  play-sound__click="" play-sound__hover="" geometry="" raycaster-target=""
                                  face-colors="" super-material="" super-material-active-color="" plane-grid-uvs=""
                                  visible="">
                            <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
                        </a-entity>
                    </a-entity>
                </a-entity>
                <a-entity id="menus"
                          bind__visible="!tools.referenceImageActive &amp;&amp; !isGrabbingToInventory &amp;&amp; !inventory.open"
                          visible="">
                    <a-entity id="menuTooltip" mixin="slice text" slice9="width: 0.15; height: 0.03; padding: 0.005"
                              position="0 0.141 -0.001" text="align: center; width: 0.3"
                              bind__text="value: menuTooltipDisplay" super-material="" data-raycastable=""
                              vertex-colors-buffer=""></a-entity>
                    <a-entity id="mainMenuSection" mixin="menuSection" data-menu-section="main" position="0 0.004 0"
                              visible="" bind__visible="" menu-section="">
                        <a-entity id="buildOptionsMenu" mixin="menu" data-menu="buildoptions" visible=""
                                  bind__visible="" menu="">
                            <a-entity mixin="slice" slice9="height: 0.29; width: 0.185" position="0 -0.015 0"
                                      super-material="" data-raycastable="" raycastable="" bind-toggle__raycastable=""
                                      vertex-colors-buffer=""></a-entity>
                            <a-entity id="menuLogo"
                                      geometry="primitive: plane; width: 0.05; height: 0.05; buffer: false; skipCache: true"
                                      menu-icon="type: logocolor" super-material="type: menuIcon; color: #FAFAFA"
                                      position="0 0.065 0.003" bind__visible="activeMenu === 'buildoptions'"
                                      plane-grid-uvs="" face-colors="" visible="">
                                <a-entity id="siteName" mixin="text" text="width: 0.19; align: center"
                                          bind__text="value: siteName" position="0 -0.04 0"></a-entity>
                            </a-entity>
                            <a-entity id="buildOptionsButtons" layout="type: box; columns: 1; margin: -0.041"
                                      position="0 -0.013 0.003">
                                <a-entity position="">
                                    <a-entity id="buildOptionsMenuNew"
                                              mixin="slice uiSounds menuButton buttonHoverColor"
                                              data-title="Work is auto-saved"
                                              proxy-event="to: a-scene; event: click; as: galleryopen; captureBubbles: true"
                                              slice9="" super-material="" data-raycastable="" play-sound__click=""
                                              play-sound__hover="" menu-hover-color="" raycastable=""
                                              bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                                    <a-entity mixin="text orangeText"
                                              text="width: 0.30; anchor: align; align: center; value: Create New Site"></a-entity>
                                </a-entity>
                                <a-entity menu-remix-button="" position="">
                                    <a-entity id="buildOptionsMenuEdit"
                                              mixin="slice uiSounds menuButton buttonHoverColor" data-menu="publish"
                                              data-title="Clone current Site" slice9="" super-material=""
                                              data-raycastable="" play-sound__click="" play-sound__hover=""
                                              menu-hover-color="" raycastable="" bind-toggle__raycastable=""
                                              vertex-colors-buffer=""></a-entity>
                                    <a-entity mixin="text yellowText"
                                              text="width: 0.30; anchor: align; align: center; value: Remix this Site"></a-entity>
                                </a-entity>
                                <a-entity position="">
                                    <a-entity id="buildOptionsMenuLoad"
                                              mixin="slice uiSounds menuButton buttonHoverColor"
                                              data-title="Load existing Site" data-menu="load" load-menu-refresh=""
                                              slice9="" super-material="" data-raycastable="" play-sound__click=""
                                              play-sound__hover="" menu-hover-color="" raycastable=""
                                              bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                                    <a-entity mixin="text greenText"
                                              text="width: 0.30; anchor: align; align: center; value: Load from Your Sites"></a-entity>
                                </a-entity>
                                <a-entity bind__menu-edit-button="activeMenu: activeMenu; siteName: siteName"
                                          visible="false" menu-edit-button="" position="">
                                    <a-entity id="buildOptionsMenuEdit"
                                              mixin="slice uiSounds menuButton buttonHoverColor"
                                              data-title="Edit current Site" data-menu="publish" slice9=""
                                              super-material="" data-raycastable="" play-sound__click=""
                                              play-sound__hover="" menu-hover-color="" raycastable=""
                                              bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                                    <a-entity mixin="text blueText"
                                              text="width: 0.30; anchor: align; align: center; value: Edit this Site"></a-entity>
                                </a-entity>
                            </a-entity>
                            <a-entity position="0 0.1 0.001">
                                <a-entity id="swapHandsButton" position="-0.07 0 0" scale="0.8 0.8 1">
                                    <a-entity mixin="uiSounds menuIcon" menu-icon="type: hand" data-title="Swap hands"
                                              bind__handedness="handPrimary: handPrimary" play-sound__click=""
                                              play-sound__hover="" geometry="" menu-hover-color="" raycaster-target=""
                                              face-colors="" super-material="" super-material-active-color=""
                                              plane-grid-uvs="" handedness="">
                                        <a-entity class="raycasterTarget" data-raycastable="" geometry="" raycastable=""
                                                  bind-toggle__raycastable=""></a-entity>
                                    </a-entity>
                                </a-entity>
                                <a-entity id="tutorialButton" position="0.07 0 0" scale="0.8 0.8 1"
                                          mixin="uiSounds menuIcon" menu-icon="type: help" data-menu="tutorial"
                                          data-title="Manual" play-sound__click="" play-sound__hover="" geometry=""
                                          menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                          super-material-active-color="" plane-grid-uvs="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry="" raycastable=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                    <a-entity id="loadMenu" mixin="menu" data-menu="load" visible="" bind__visible="" menu="">
                        <a-entity mixin="slice" slice9="height: 0.25; width: 0.185" position="0 0.004 0"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity mixin="slice" slice9="height: 0.045; width: 0.06" position="-0.106 0.1065 0.00001"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity mixin="uiSounds menuIcon" menu-icon="type: back" data-menu="buildoptions"
                                  data-title="Back" position="-0.117 0.1025 0.003" play-sound__click=""
                                  play-sound__hover="" geometry="" menu-hover-color="" raycaster-target=""
                                  face-colors="" super-material="" super-material-active-color="" plane-grid-uvs="">
                            <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                      bind-toggle__raycastable=""></a-entity>
                        </a-entity>
                        <a-entity id="loadMenuHeader" mixin="orangeText text"
                                  text="width: 0.4; align: center; value: Your Sites" position="0 0.102 0"></a-entity>
                        <a-entity id="loadOptions" layout="type: box; columns: 1; margin: -0.041" menu-load-button=""
                                  position="0 0.061 0.003" bind-for="for: siteName; in: loadMenuSiteNames">
                            <template>
                                <a-entity>
                                    <a-entity mixin="slice menuButton buttonHoverColor" data-title="{{ siteName }}"
                                              data-site-name="{{ siteName }}" data-menu="publish"></a-entity>
                                    <a-entity mixin="text blueText"
                                              text="width: 0.25; anchor: align; align: center; value: {{ siteName }}"></a-entity>
                                </a-entity>
                            </template>
                        </a-entity>
                        <a-entity position="0 -0.102 0.001">
                            <a-entity id="loadPrevPage" mixin="uiSounds menuIcon iconHoverColor"
                                      position="-0.067 0 0.001" data-title="Previous page"
                                      bind__visible="loadMenu.hasPrev" menu-icon="type: back"
                                      bind-toggle__raycastable="loadMenu.hasPrev &amp;&amp; activeMenu === 'load'"
                                      proxy-event="event: click; to: a-scene; as: loadmenuprev; captureBubbles: true"
                                      play-sound__click="" play-sound__hover="" geometry="" menu-hover-color=""
                                      raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" visible="" plane-grid-uvs="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity id="loadNextPage" mixin="uiSounds menuIcon iconHoverColor" menu-icon="type: back"
                                      rotation="0 0 180" position="0.067 0 0.001" data-title="Next page"
                                      bind__visible="loadMenu.hasNext"
                                      bind-toggle__raycastable="loadMenu.hasNext &amp;&amp; activeMenu === 'load'"
                                      proxy-event="event: click; to: a-scene; as: loadmenunext; captureBubbles: true"
                                      play-sound__click="" play-sound__hover="" geometry="" menu-hover-color=""
                                      raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" plane-grid-uvs="" visible="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                    <a-entity id="tutorialMenu" mixin="menu" data-menu="tutorial" visible="" bind__visible="" menu="">
                        <a-entity mixin="slice" slice9="height: 0.25; width: 0.185" position="0 0.004 0"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity mixin="slice" slice9="height: 0.045; width: 0.06" position="-0.106 0.1065 0.00001"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity mixin="uiSounds menuIcon" menu-icon="type: back" data-menu="buildoptions"
                                  data-title="Back" position="-0.117 0.1025 0.003" play-sound__click=""
                                  play-sound__hover="" geometry="" menu-hover-color="" raycaster-target=""
                                  face-colors="" super-material="" super-material-active-color="" plane-grid-uvs="">
                            <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                      bind-toggle__raycastable=""></a-entity>
                        </a-entity>
                        <a-entity position="0 0 0.001">
                            <a-entity id="tutorialTitle" mixin="orangeText text" text="width: 0.4; align: center"
                                      bind__text="value: tutorial.title" position="0 0.102 0"></a-entity>
                            <a-entity id="tutorialImage" geometry="primitive: plane; height: 0.075; width: 0.15"
                                      material="shader: flat" bind__material="src: tutorial.image"
                                      position="0 0.042 0"></a-entity>
                            <a-entity id="tutorialText" mixin="text blueText"
                                      text="baseline: top; width: 0.15; wrapCount: 30; lineHeight: 50"
                                      bind__text="value: tutorial.text" position="0 -0.01 0"></a-entity>
                        </a-entity>
                        <a-entity position="0 -0.102 0.001">
                            <a-entity id="tutorialPrevPage" mixin="uiSounds menuIcon iconHoverColor"
                                      position="-0.067 0 0.001" data-title="Previous page"
                                      bind__visible="tutorial.hasPrev" menu-icon="type: back"
                                      bind-toggle__raycastable="tutorial.hasPrev &amp;&amp; activeMenu === 'tutorial'"
                                      proxy-event="event: click; to: a-scene; as: tutorialmenuprev; captureBubbles: true"
                                      play-sound__click="" play-sound__hover="" geometry="" menu-hover-color=""
                                      raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" visible="" plane-grid-uvs="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity mixin="blueText text" text="align: center; width: 0.15"
                                      bind__text="value: tutorial.pageText"></a-entity>
                            <a-entity id="tutorialNextPage" mixin="uiSounds menuIcon iconHoverColor"
                                      bind-toggle__raycastable="tutorial.hasNext &amp;&amp; activeMenu === 'tutorial'"
                                      position="0.067 0 0.001" data-title="Next page" bind__visible="tutorial.hasNext"
                                      menu-icon="type: back"
                                      proxy-event="event: click; to: a-scene; as: tutorialmenunext; captureBubbles: true"
                                      rotation="0 0 180" play-sound__click="" play-sound__hover="" geometry=""
                                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" visible="" plane-grid-uvs="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                    <a-entity id="buildMenuSection" mixin="menuSection" data-menu-section="build"
                              data-title="Editing site" visible="" bind__visible="" menu-section="">
                        <a-entity id="publishMenu" mixin="menu" data-menu="publish" visible="" bind__visible="" menu="">
                            <a-entity mixin="slice" slice9="height: 0.26; width: 0.195" super-material=""
                                      data-raycastable="" bind-toggle__raycastable=""
                                      vertex-colors-buffer=""></a-entity>
                            <a-entity position="0 0.05 0.003">
                                <a-entity layout="type: box; columns: 1; margin: -0.13">
                                    <a-entity layout="type: box; columns: 1; margin: -0.019" position="">
                                        <a-entity id="siteLabel" mixin="text grayText"
                                                  text="width: 0.28; align: center; value: Site Name"
                                                  position=""></a-entity>
                                        <a-entity id="siteName" mixin="text" text="width: 0.30; align: center; "
                                                  bind__text="value: siteName" position=""></a-entity>
                                        <a-entity id="siteUrl" mixin="text grayText" text="width: 0.19; align: center"
                                                  bind__text="value: siteNameText"
                                                  bind__published-site-text-color="isSitePublished: isSitePublished"
                                                  published-site-text-color="" position=""></a-entity>
                                        <a-entity position="">
                                            <a-entity id="publishShareInstruction" mixin="text orangeText"
                                                      text="width: 0.19; anchor: align; align: center; value: Share this URL. Viewable on any browser!"
                                                      bind__visible="isSitePublished" position="0 0.0008 0"
                                                      visible=""></a-entity>
                                        </a-entity>
                                    </a-entity>
                                    <a-entity id="publishSiteButton" position="">
                                        <a-entity position="0 -0.01 0">
                                            <a-entity id="publish" mixin="slice uiSounds menuButton buttonHoverColor"
                                                      bind__publish-site="isSitePublished: isSitePublished; siteName: siteName"
                                                      data-title="Publish to Web"
                                                      bind-toggle__raycastable="activeMenu === 'publish' &amp;&amp; hasEntities"
                                                      slice9="" super-material="" data-raycastable=""
                                                      play-sound__click="" play-sound__hover="" menu-hover-color=""
                                                      publish-site="" vertex-colors-buffer=""></a-entity>
                                            <a-entity mixin="text"
                                                      text="width: 0.25; anchor: align; align: center; color: #DADADA"
                                                      bind__text="value: publishSiteButtonText"></a-entity>
                                        </a-entity>
                                    </a-entity>
                                </a-entity>
                            </a-entity>
                        </a-entity>
                        <a-entity id="environment" mixin="menu" data-menu="environment"
                                  bind__menu-environment="enabled: activeMenu === 'environment'" visible=""
                                  bind__visible="" menu="" menu-environment="">
                            <a-entity mixin="slice" slice9="height: 0.24; width: 0.205" position="0.0075 0.010 0"
                                      super-material="" data-raycastable="" bind-toggle__raycastable=""
                                      vertex-colors-buffer=""></a-entity>
                            <a-entity position="0 0.008 0">
                                <a-entity id="selectedEnvironmentColor" bind__super-material="color: environment.color"
                                          geometry="primitive: box; depth: 0.0015; height: 0.03; width: 0.125; skipCache: true"
                                          super-material="" position="0.007 0.061 0" vertex-colors-buffer=""></a-entity>
                                <a-entity id="environmentColorContainer" mixin="uiSounds" position="-0.067 -0.093 0.002"
                                          play-sound__click="" play-sound__hover="">
                                    <a-entity id="environmentColors"
                                              layout="type: box; columns: 4; marginColumn: 0.05; marginRow: 0.03; reverse: true">
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #111" data-color="#111" data-color-name="black"
                                                  data-title="Black" face-colors="" position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #666" data-color="#666" data-color-name="gray"
                                                  data-title="Gray" face-colors="" position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #B4AEAA" data-color="#B4AEAA"
                                                  data-color-name="lightgray" data-title="Light Gray" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #F2EDED" data-color="#F2EDED"
                                                  data-color-name="white" data-title="White" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #2b2118" data-color="#2b2118"
                                                  data-color-name="darkbrown" data-title="Dark Brown" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #8D4126" data-color="#8D4126"
                                                  data-color-name="brown" data-title="Brown" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #EF893B" data-color="#EF893B"
                                                  data-color-name="orange" data-title="Orange" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #DAD45E" data-color="#DAD45E"
                                                  data-color-name="yellow" data-title="Yellow" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #392534" data-color="#392534"
                                                  data-color-name="darkred" data-title="Dark Red" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #A32118" data-color="#A32118"
                                                  data-color-name="red" data-title="Red" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #D04648" data-color="#D04648"
                                                  data-color-name="maroon" data-title="Maroon" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #EDA78A" data-color="#EDA78A"
                                                  data-color-name="pink" data-title="Pink" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #1E3C60" data-color="#1E3C60"
                                                  data-color-name="blue" data-title="Blue" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #416132" data-color="#416132"
                                                  data-color-name="green" data-title="Green" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #00b295" data-color="#00b295"
                                                  data-color-name="teal" data-title="Teal" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #57C8EF" data-color="#57C8EF"
                                                  data-color-name="lightblue" data-title="Light Blue" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #5B464F" data-color="#5B464F"
                                                  data-color-name="darkpurple" data-title="Dark Purple" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #6B3869" data-color="#6B3869"
                                                  data-color-name="purple" data-title="Purple" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #915CB9" data-color="#915CB9"
                                                  data-color-name="lightpurple" data-title="Light Purple" face-colors=""
                                                  position=""></a-entity>
                                        <a-entity class="color" bind-toggle__raycastable="activeMenu === 'environment'"
                                                  geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                                  super-material="color: #F75A34" data-color="#F75A34"
                                                  data-color-name="orangered" data-title="Orange Red" face-colors=""
                                                  position=""></a-entity>
                                    </a-entity>
                                    <a-entity id="envColorActiveSlice"
                                              geometry="primitive: plane; height: 0.028; width: 0.048"
                                              material="shader: flat; color: #3D8EFC"></a-entity>
                                    <a-entity id="envColorHoverSlice"
                                              geometry="primitive: plane; height: 0.028; width: 0.048"
                                              material="shader: flat; color: #DADADA" visible="false"></a-entity>
                                </a-entity>
                            </a-entity>
                        </a-entity>
                        <a-entity id="thingMenu" mixin="menu" data-menu="thing"
                                  bind__thing-loader-paginator="thingMenuOpened: activeMenu === 'thing'" visible=""
                                  bind__visible="" menu="" thingmenuopened="false">
                            <a-entity mixin="slice" slice9="height: 0.26; width: 0.195" super-material=""
                                      data-raycastable="" bind-toggle__raycastable=""
                                      vertex-colors-buffer=""></a-entity>
                            <a-entity id="thingMenuThings"
                                      layout="type: box; columns: 1; marginColumn: 0.068; marginRow: -0.048"
                                      position="0 0.065 0.005">
                                <a-entity mixin="text grayText"
                                          text="width: 0.15; wrapCount: 25; anchor: align; align: center; value: Things are single objects that group together Shapes"
                                          position=""></a-entity>
                                <a-entity id="thingMenuNewButton" position="">
                                    <a-entity id="buildMenuCraft" mixin="slice uiSounds menuButton buttonHoverColor"
                                              data-menu="shape" data-title="Create New Thing" slice9=""
                                              super-material="" data-raycastable="" play-sound__click=""
                                              play-sound__hover="" menu-hover-color="" bind-toggle__raycastable=""
                                              vertex-colors-buffer=""></a-entity>
                                    <a-entity mixin="text whiteText"
                                              text="width: 0.30; anchor: align; align: center; color: #D74A2F; value: + Create New Thing"></a-entity>
                                </a-entity>
                                <a-entity id="thingMenuEditButton" position="">
                                    <a-entity id="thingMenuUnfocused"
                                              bind__visible="hasEntities &amp;&amp; !focusedEntityId" visible="">
                                        <a-entity mixin="text grayText"
                                                  text="width: 0.15; wrapCount: 25; anchor: align; align: center; value: Or touch an existing Thing to edit it."></a-entity>
                                    </a-entity>
                                    <a-entity id="thingMenuFocused" bind__visible="!!focusedEntityId" visible="">
                                        <a-entity position="0 -0.07 0.005">
                                            <a-entity id="buildMenuUpdate"
                                                      mixin="slice uiSounds menuButton buttonHoverColor"
                                                      data-title="Edit Selected Thing" data-menu="shape" slice9=""
                                                      super-material="" data-raycastable="" play-sound__click=""
                                                      play-sound__hover="" menu-hover-color=""
                                                      bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                                            <a-entity mixin="text"
                                                      text="width: 0.30; anchor: align; align: center; color: #49BBEB"
                                                      bind__text="value: focusedEntityText"></a-entity>
                                        </a-entity>
                                        <a-entity position="0 -0.01 0.025">
                                            <a-entity id="menuSelectedThing"
                                                      bind__menu-selected-thing="cameraScaleFactor: cameraScaleFactor; enabled: activeMenu === 'thing'; thingId: focusedEntityId"
                                                      animation="property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 45000"
                                                      menu-selected-thing=""></a-entity>
                                            <a-entity id="selectedThingSlice" mixin="slice"
                                                      slice9="width: 0.08; height: 0.08" super-material="color: #030303"
                                                      position="0 -0.01 -0.0249" data-raycastable=""
                                                      bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                                        </a-entity>
                                    </a-entity>
                                </a-entity>
                            </a-entity>
                        </a-entity>
                        <a-entity mixin="slice" slice9="height: 0.045; width: 0.06" position="-0.103 0.1075 0.00001"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity id="buildMenuNav" layout="type: line; margin: 0.047" position="-0.117 0.108 0.003">
                            <a-entity position="">
                                <a-entity id="buildMenuBack" mixin="uiSounds menuIcon" menu-icon="type: save"
                                          data-menu="buildoptions" data-title="Finish editing Site"
                                          proxy-event="event: click; to: a-scene; as: saveloadsave; captureBubbles: true"
                                          position="0.005 0 0" play-sound__click="" play-sound__hover="" geometry=""
                                          menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                          super-material-active-color="" plane-grid-uvs="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                            </a-entity>
                            <a-entity id="buildMenuPublish" mixin="uiSounds menuIcon" menu-icon="type: logo"
                                      data-menu="publish"
                                      bind__super-material-active-color="active: activeMenu === 'publish'"
                                      data-title="Site" play-sound__click="" play-sound__hover="" geometry=""
                                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" plane-grid-uvs="" position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity id="buildMenuEnvironment" mixin="uiSounds menuIcon" menu-icon="type: image"
                                      data-menu="environment"
                                      bind__super-material-active-color="active: activeMenu === 'environment'"
                                      data-title="Environment" play-sound__click="" play-sound__hover="" geometry=""
                                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" plane-grid-uvs="" position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity id="buildMenuThing" mixin="uiSounds menuIcon" menu-icon="type: object"
                                      data-menu="thing"
                                      bind__super-material-active-color="active: activeMenu === 'thing'"
                                      data-title="Things" play-sound__click="" play-sound__hover="" geometry=""
                                      menu-hover-color="" raycaster-target="" face-colors="" super-material=""
                                      super-material-active-color="" plane-grid-uvs="" position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                    <a-entity id="craftMenuSection" mixin="menuSection" data-menu-section="craft"
                              data-title="Crafting thing" visible="" bind__visible="" menu-section="">
                        <a-entity mixin="slice" slice9="height: 0.24; width: 0.205" position="0.0075 0.009 0"
                                  super-material="" data-raycastable="" bind-toggle__raycastable=""
                                  vertex-colors-buffer=""></a-entity>
                        <a-entity id="craftMenuBackSlice" mixin="slice" slice9="height: 0.045; width: 0.06"
                                  position="-0.102 0.1065 0.00001" super-material="" data-raycastable=""
                                  bind-toggle__raycastable="" vertex-colors-buffer=""></a-entity>
                        <a-entity id="craftMenuNav" layout="type: line; margin: 0.047" position="-0.117 0.108 0.003">
                            <a-entity id="craftMenuBack" mixin="uiSounds menuIcon" menu-icon="type: back"
                                      data-menu="thing" data-title="Finish crafting Thing"
                                      play-sound__click="sound: https://aframe.io/assets/audio/success.mp3; event: click; volume: 0.5"
                                      play-sound__hover="" geometry="" menu-hover-color="" raycaster-target=""
                                      face-colors="" super-material="" super-material-active-color="" plane-grid-uvs=""
                                      position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity id="craftMenuShape" mixin="uiSounds menuIcon" menu-icon="type: shapes"
                                      bind__super-material-active-color="active: activeMenu === 'shape'"
                                      data-menu="shape" data-title="Shapes" play-sound__click="" play-sound__hover=""
                                      geometry="" menu-hover-color="" raycaster-target="" face-colors=""
                                      super-material="" super-material-active-color="" plane-grid-uvs="" position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                            <a-entity id="craftMenuMaterial" mixin="uiSounds menuIcon" menu-icon="type: material"
                                      bind__super-material-active-color="active: activeMenu === 'material'"
                                      data-menu="material" data-title="Colors" play-sound__click="" play-sound__hover=""
                                      geometry="" menu-hover-color="" raycaster-target="" face-colors=""
                                      super-material="" super-material-active-color="" plane-grid-uvs="" position="">
                                <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                          bind-toggle__raycastable=""></a-entity>
                            </a-entity>
                        </a-entity>
                        <a-entity id="shapeMenu" mixin="menu" bind__menu-shape="addPosition: grabPosition"
                                  data-menu="shape" visible="" bind__visible="" menu="" menu-shape="">
                            <a-entity id="shapes" mixin="uiSounds" bind__super-material="color: selectedColor"
                                      layout="type: box; columns: 4; margin: -0.045" position="0.076 0.057 0.02"
                                      bind__geometry-merger-shape-active-color="baseColor: selectedColor"
                                      geometry-merger="deleteOriginalMesh: false; hideOriginalEntities: true"
                                      play-sound__click="" play-sound__hover="" super-material="" face-colors=""
                                      geometry-merger-shape-active-color="">
                                <a-entity class="shapeOption" data-shape-option="torus2" data-title="Torus"
                                          geometry="primitive: torus; radius: 0.015; radiusTubular: 0.0015; segmentsRadial: 8; segmentsTubular: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="sphere2" data-title="Sphere"
                                          geometry="primitive: sphere; radius: 0.015; segmentsHeight: 6; segmentsWidth: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="cone2" data-title="Cone"
                                          geometry="primitive: cone; height: 0.03; radiusBottom: 0.015; radiusTop: 0.00015; segmentsHeight: 0; segmentsRadial: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="box" data-title="Box"
                                          geometry="primitive: box; depth: 0.02; height: 0.02; width: 0.02; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="semitorus2" data-title="Semitorus"
                                          geometry="primitive: torus; radius: 0.015; radiusTubular: 0.0015; arc: 180; segmentsRadial: 8; segmentsTubular: 4; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="semisphere2" data-title="Semisphere"
                                          geometry="primitive: sphere; radius: 0.015; thetaLength: 90; segmentsHeight: 3; segmentsWidth: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="frustum" data-title="Frustum"
                                          geometry="primitive: cone; height: 0.015; radiusBottom: 0.015; radiusTop: 0.0075; segmentsHeight: 0; segmentsRadial: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="octahedron" data-title="Octahedron"
                                          geometry="primitive: octahedron; radius: 0.015; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="sinTube" data-title="Sintube"
                                          geometry="primitive: sinTube; scale: 0.012; radius: 0.003; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="dodecahedron" data-title="Dodecahedron"
                                          geometry="primitive: dodecahedron; radius: 0.015; detail: 0; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="cylinder2" data-title="Cylinder"
                                          geometry="primitive: cylinder; height: 0.015; radius: 0.015; segmentsHeight: 0; segmentsRadial: 8; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          rotation: -90 0 0" super-material="color: #F75A34" rotation="90 0 0" face-colors=""
                                          position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="tetrahedron" data-title="Tetrahedron"
                                          geometry="primitive: tetrahedron; radius: 0.015; detail: 0; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="quartertorus2"
                                          data-title="Quartertorus"
                                          geometry="primitive: torus; radius: 0.015; radiusTubular: 0.0015; arc: 90; segmentsRadial: 8; segmentsTubular: 3; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="decagon" data-title="Decagon"
                                          geometry="primitive: tetrahedron; radius: 0.015; detail: 1; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="semicylinder2"
                                          data-title="Semicylinder"
                                          geometry="primitive: cylinder; height: 0.015; radius: 0.015; thetaLength: 180; thetaStart: -90; segmentsHeight: 0; segmentsRadial: 4; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          rotation: 90 0 0
                          " super-material="color: #F75A34" rotation="-90 0 0" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                                <a-entity class="shapeOption" data-shape-option="triangleprism"
                                          data-title="Triangle Prism"
                                          geometry="primitive: trianglePrism; height: 0.01; sideLength: 0.02; buffer: false"
                                          raycaster-target="width: 0.05; height: 0.05;
                          
                          " super-material="color: #F75A34" face-colors="" position="">
                                    <a-entity class="raycasterTarget" data-raycastable="" geometry=""
                                              bind-toggle__raycastable=""></a-entity>
                                </a-entity>
                            </a-entity>
                        </a-entity>
                        <a-entity id="materialMenu" mixin="menu" data-menu="material"
                                  bind__menu-material="enabled: activeMenu === 'material'" position="0 0.008 0"
                                  visible="" bind__visible="" menu="" menu-material="">
                            <a-entity id="selectedColor" bind__super-material="color: selectedColor"
                                      geometry="primitive: box; depth: 0.0015; height: 0.03; width: 0.125; skipCache: true"
                                      super-material="" position="0.007 0.061 0" vertex-colors-buffer=""></a-entity>
                            <a-entity id="colorContainer" mixin="uiSounds" position="-0.067 -0.093 0.002"
                                      play-sound__click="" play-sound__hover="">
                                <a-entity id="colors"
                                          layout="type: box; columns: 4; marginColumn: 0.05; marginRow: 0.03; reverse: true">
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #111" data-color="#111" data-color-name="black"
                                              data-title="Black" face-colors="" position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #666" data-color="#666" data-color-name="gray"
                                              data-title="Gray" face-colors="" position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #B4AEAA" data-color="#B4AEAA"
                                              data-color-name="lightgray" data-title="Light Gray" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #F2EDED" data-color="#F2EDED"
                                              data-color-name="white" data-title="White" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #2b2118" data-color="#2b2118"
                                              data-color-name="darkbrown" data-title="Dark Brown" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #8D4126" data-color="#8D4126"
                                              data-color-name="brown" data-title="Brown" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #EF893B" data-color="#EF893B"
                                              data-color-name="orange" data-title="Orange" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #DAD45E" data-color="#DAD45E"
                                              data-color-name="yellow" data-title="Yellow" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #392534" data-color="#392534"
                                              data-color-name="darkred" data-title="Dark Red" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #A32118" data-color="#A32118" data-color-name="red"
                                              data-title="Red" face-colors="" position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #D04648" data-color="#D04648"
                                              data-color-name="maroon" data-title="Maroon" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #EDA78A" data-color="#EDA78A"
                                              data-color-name="pink" data-title="Pink" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #1E3C60" data-color="#1E3C60"
                                              data-color-name="blue" data-title="Blue" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #416132" data-color="#416132"
                                              data-color-name="green" data-title="Green" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #00b295" data-color="#00b295"
                                              data-color-name="teal" data-title="Teal" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #57C8EF" data-color="#57C8EF"
                                              data-color-name="lightblue" data-title="Light Blue" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #5B464F" data-color="#5B464F"
                                              data-color-name="darkpurple" data-title="Dark Purple" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #6B3869" data-color="#6B3869"
                                              data-color-name="purple" data-title="Purple" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #915CB9" data-color="#915CB9"
                                              data-color-name="lightpurple" data-title="Light Purple" face-colors=""
                                              position=""></a-entity>
                                    <a-entity class="color" bind-toggle__raycastable="activeMenu === 'material'"
                                              geometry="buffer: false; skipCache: true; primitive: box; depth: 0.0015; height: 0.025; width: 0.045"
                                              super-material="color: #F75A34" data-color="#F75A34"
                                              data-color-name="orangered" data-title="Orange Red" face-colors=""
                                              position=""></a-entity>
                                </a-entity>
                                <a-entity id="colorActiveSlice" geometry="primitive: plane; height: 0.028; width: 0.048"
                                          material="shader: flat; color: #3D8EFC"></a-entity>
                                <a-entity id="colorHoverSlice" geometry="primitive: plane; height: 0.028; width: 0.048"
                                          material="shader: flat; color: #DADADA" visible="false"></a-entity>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                </a-entity>
            </a-entity>
        </a-entity>
    </a-entity>
    <a-mixin id="galleryBackground" bind-toggle__raycastable="gallery.active"
             geometry="primitive: plane; width: 0.9; height: 0.5" super-material="color: #171717"></a-mixin>
    <a-mixin id="galleryImage" geometry="primitive: plane; width: 0.9; height: 0.4" material="shader: flat;"
             position="0 0.052 0.01"></a-mixin>
    <a-mixin id="galleryText" text="align: center; width: 0.9; baseline: bottom; wrapCount: 27"></a-mixin>
    <a-entity id="gallery" bind__visible="gallery.active" bind__gallery-layout="active: gallery.active" visible=""
              gallery-layout="">
        <a-entity id="galleryItems" bind__gallery="enabled: gallery.active"
                  bind-for="for: item; in: galleryItems; key: title" gallery="">
            <template>
                <a-entity class="galleryItem" gallery-item="">
                    <a-entity class="galleryLoading" mixin="menuIcon" menu-icon="type: logoborder"
                              super-material="type: menuIcon; color: #FFF" scale="7 7 1"
                              position="0 0 -0.001"></a-entity>
                    <a-entity class="galleryItemData" scale="1 1 1" visible="false">
                        <a-entity class="galleryBackground" mixin="galleryBackground"
                                  data-name="{{ item.name }}"></a-entity>
                        <a-entity class="galleryImage" mixin="galleryImage" material="src: {{ item.image }}"></a-entity>
                        <a-entity class="galleryText" mixin="text galleryText" text="value: {{ item.title }}"
                                  position="0 -0.22 0.02"></a-entity>
                    </a-entity>
                </a-entity>
            </template>
        </a-entity>
        <a-entity id="galleryTitleContainer" position="0 0.5 -2">
            <a-entity class="galleryTitleBg" mixin="slice" slice9="padding: 0.04; width: 1; height: 0.15"
                      position="0 0 -0.01" super-material="" data-raycastable="" vertex-colors-buffer=""></a-entity>
            <a-entity class="galleryTitle" mixin="text" text="wrapCount: 20; align: center;"
                      bind__text="value: gallery.title; color: gallery.color"></a-entity>
            <a-entity mixin="uiSounds menuIcon" menu-icon="type: back"
                      bind__super-material="type: menuIcon; color: gallery.color" bind__visible="gallery.hasPrev"
                      bind-toggle__raycastable="gallery.active &amp;&amp; gallery.hasPrev"
                      menu-hover-color="hoverColor: #48BAEA" position="-0.43 0 0" scale="4 4 1" title="Previous page"
                      proxy-event="event: click; to: a-scene; as: galleryprevpage; captureBubbles: true"
                      play-sound__click="" play-sound__hover="" geometry="" raycaster-target="" super-material=""
                      super-material-active-color="" plane-grid-uvs="" face-colors="" visible="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
            <a-entity mixin="uiSounds menuIcon" menu-icon="type: back"
                      bind__super-material="type: menuIcon; color: gallery.color" bind__visible="gallery.hasNext"
                      bind-toggle__raycastable="gallery.active &amp;&amp; gallery.hasNext"
                      menu-hover-color="hoverColor: #48BAEA" rotation="0 0 180" position="0.43 0 0" scale="4 4 1"
                      title="Next page"
                      proxy-event="event: click; to: a-scene; as: gallerynextpage; captureBubbles: true"
                      play-sound__click="" play-sound__hover="" geometry="" raycaster-target="" super-material=""
                      super-material-active-color="" plane-grid-uvs="" face-colors="" visible="">
                <a-entity class="raycasterTarget" data-raycastable="" geometry=""></a-entity>
            </a-entity>
        </a-entity>
        <a-entity position="0 -1.1 -2" scale="5 5 1">
            <a-entity id="closeGallery" mixin="slice uiSounds menuButton buttonHoverColor"
                      proxy-event="event: click; to: a-scene; as: galleryclose"
                      bind-toggle__raycastable="gallery.active" slice9="" super-material="" data-raycastable=""
                      play-sound__click="" play-sound__hover="" menu-hover-color="" vertex-colors-buffer=""></a-entity>
            <a-entity mixin="text blueText" text="width: 0.30; anchor: align; align: center; value: Cancel"></a-entity>
        </a-entity>
    </a-entity>
    <a-entity id="humanScaleMarker" bind__human-scale-marker="cameraScaleFactor: cameraScaleFactor" rotation="0 180 0"
              human-scale-marker=""></a-entity>
    <a-entity id="mouseCursor" raycaster="objects: a-entity[raycastable]" cursor="rayOrigin: mouse" debug-cursor=""
              menu-tooltip=""></a-entity>
    <a-entity light="color:#A2A5AF; intensity: 0.1" position="-1.930 2.781 -2.322"></a-entity>
    <canvas class="a-canvas" data-aframe-canvas="true" width="1920" height="716"></canvas>
    <div class="a-loader-title" style="display: none;">Supercraft</div>
    <a-entity id="scalePoint" geometry="" material="" mixin="uiSounds uiSoundsCollider" play-sound__click=""
              play-sound__hover="">
        <a-entity id="scalePointMesh" geometry="" material=""></a-entity>
    </a-entity>
    <a-entity class="teleportRay" shadow=""></a-entity>
    <a-entity class="hitEntity" visible="" shadow="" material="" animation__scale="">
        <a-entity geometry="" material="" rotation=""></a-entity>
        <a-entity position="" geometry="" material=""></a-entity>
    </a-entity>
    <a-entity id="superEnvironment" super-environment="" visible="">
        <a-entity id="superLightAmbient" light=""></a-entity>
        <a-entity id="superLightHemisphere" light=""></a-entity>
        <a-entity id="superLightDirectional" light=""></a-entity>
        <a-entity rotation="" class="environmentGround" visible="" scale="" shadow=""></a-entity>
        <a-entity visible=""></a-entity>
        <a-sky radius="200" segments-height="6" segments-width="6" visible="" geometry="" scale="" material=""></a-sky>
    </a-entity>
    <div class="a-orientation-modal a-hidden" aframe-injected="">
        <button aframe-injected="">Exit VR</button>
    </div>
</a-scene>
</body>
</html>`);
    }
}