module Hello exposing (view)

{-| This is a demo of a parrot component which shows the text of an input field in the title

@docs view

-}

import Html exposing (..)
import Html.Events exposing (onInput)
import Html.Attributes exposing (defaultValue, class)


{-| Renders the hello view
-}
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
