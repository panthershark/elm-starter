module Main exposing (..)

import Html exposing (Html)
import Hello


type alias Model =
    { hello : String
    }


type Msg
    = UpdateHello String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateHello s ->
            ( { model | hello = s }, Cmd.none )


init : String -> ( Model, Cmd Msg )
init str =
    ( Model str, Cmd.none )


view : Model -> Html Msg
view mod =
    Hello.view mod.hello UpdateHello


main =
    Html.program
        { init = init "Bienvenidos"
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
