module Hello exposing (view)

import Html exposing (..)
import Html.Events exposing (onInput)
import Html.Attributes exposing (defaultValue, class)


view : String -> (String -> msg) -> Html msg
view str msgInput =
    let
        hello =
            if str == "" then
                "Hello World"
            else
                str
    in
        div [ class "hello" ]
            [ h1 [] [ text hello ]
            , input [ onInput msgInput, defaultValue hello ] []
            ]
