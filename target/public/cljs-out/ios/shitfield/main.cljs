(ns shitfield.main
  (:require [react]
            [react-native :as rn]))

(def <> react/createElement)

(defn renderfn [props]
  (<> rn/View
      #js {:style #js {:backgroundColor "#FFFFFF"
                       :flex 1
                       :justifyContent "center"}}
      (<> rn/Text
          #js {:style #js {:color "white"
                           :backgroundColor "blue"
                           :textAlign "center"}}
          (str "HELLO !!!"))

      (<> rn/Button
          #js {:title "Click me!"}

          (<> rn/Text "click")
      )
  )
)

;; the function figwheel-rn-root must be provided. It will be called by 
;; react-native-figwheel-bridge to render your application. 
;; You can configure the name of this function with config.renderFn
(defn figwheel-rn-root []
  (renderfn {}))
