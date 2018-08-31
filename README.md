# tessel-social-lcd-bot

Setup Notes

1. GitHub repo
1. Make sure t2-cli is up-to-date (`npm i -g t2-cli`) and run `t2 update`. Tessel firmware version should be 0.2.0 or higher.
2. `t2 init`
1. Wire up LCD:
  * A0, A1, A2, A3, A4, A7
  * RGB Backlight: GND, A5, A6, B5
1. Johnny-Five/T2 startup script