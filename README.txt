SILVER ECONOMY DASHBOARD - COPY FOR COPYRIGHT SUBMISSION
=======================================================

HOW TO OPEN
  1. Unzip this folder anywhere.
  2. Double-click index.html. It opens in Chrome, Edge, Firefox or Safari.
  No install, no server, no internet and no account are needed.
  (Only the buttons that open Google Maps, WhatsApp or an agency web page
  need internet, and only when pressed.)

THE FOUR PAGES
  index.html     Overview: the project, the map of who can help one older
                 person, partners, the people shelf, aims, team, results
                 and the national plans it supports.
  scenario.html  Try a case. The first screen asks what the older person
                 wants to do today: get help, or give.
                 Get help: describe one older person, answer simple
                 questions one screen at a time, and get one Assistance
                 Plan: possible organisations for each need, who to
                 contact, a one-trip route, and a "Get ready to apply"
                 checklist for five aid schemes (LZNK zakat, MAIK x2, JKM x2).
                 Give: sedekah or a donation, cash waqf, sponsoring an older
                 person, giving things, volunteering, sharing skills or
                 supporting others of the same age. It ends in one Giving
                 Plan: the official ways to give (the kariah masjid, LZNK
                 Sadaqah4Ummah, MAIK infaq, and waqf only through MAIK), and
                 where to volunteer (the JKM volunteer scheme, a PAWE centre
                 in the district, and NGOs). It never asks how much, never
                 takes money and shows no account numbers.
  data.html      Data blueprint: the data the dashboard needs before it can
                 work for real, with a link to the Excel workbook.
  app.html       Our Silver App: a 13-screen mock phone app. The help path
                 follows the Try a case flow; the giving path shows a
                 digital masjid tabung (once, every Friday or every month,
                 private giving, the masjid's own DuitNow QR), volunteering
                 and a giving record kept on the phone.
  Kedah Silver Data Blueprint.xlsx   The workbook, as its own file.

  All pages work in English and Bahasa Melayu. The round palette button
  (top right) offers eight colour and font looks with Malay names: Padi,
  Songket, Diraja, Teratai, Kayu Jati, Wau, Malam, Jelas (large text, high
  contrast). Padi also has light and dark. The help matching uses a sample
  list of 30 organisations; it never promises help or decides who
  qualifies. The giving places are real, from public pages checked in
  October 2026, but none has agreed yet to take part.

SOURCE CODE
  There is no build step and nothing is compiled or hidden: the .html, .js
  and .css files ARE the source code. Open any of them in Notepad to read
  it. SOURCE-CODE.pdf prints every source file in full, with line numbers,
  plus a SHA-256 value for each file so the printout can be matched to the
  files in this folder.

  assets/js/kse-assist.js   Try a case help rules: the case model, 10 help
                            areas with 60 items, matching and ranking,
                            scheme checks, case ID (rules version 2026.10.04).
  assets/js/kse-give.js     Try a case giving rules: ways to give, official
                            money routes, volunteer places and matching,
                            giving plan ID (rules version 2026.10.07).
  assets/js/kse-case-ui.js  Try a case screens for both sides, case card,
                            plans, print sheets.
  assets/js/kse-data.js     Content and sample data, Malay text.
  assets/js/kse-shell.js    Navigation, language, looks, light/dark, footer.
  assets/js/kse-pages.js    Overview and Our Silver App behaviour.
  assets/js/kse-viz.js      The Overview map of who can help.
  assets/js/kse-art.js      Every picture, drawn as vector code.
  assets/css/*.css          Styles; fonts.css lists the local fonts.

IMAGES
  This copy contains no photographs and no AI-generated or AI-edited images.
  There are no .png, .jpg, .webp or other picture files at all. Every
  picture on screen (the Overview landscape, the people shelf, the map
  centre, the page scenes, the contact cards, the app screens) is a simple
  vector drawing written as code in assets/js/kse-art.js, coloured by the
  styles. The team is shown by initials, not photographs. The tab icon is
  assets/art/crest.svg (vector).

THIRD-PARTY MATERIAL
  Fonts only: 14 families from Google Fonts (Inter, Instrument Serif,
  Lexend, Young Serif, Cinzel, Mulish, Marcellus, Nunito Sans, Bitter,
  Source Sans 3, Baloo 2, Nunito, Literata, Atkinson Hyperlegible), all
  under the SIL Open Font Licence 1.1; licence texts are in assets/fonts.
  No code libraries are used.

PRIVACY
  Nothing is sent anywhere. The pages ask for no name, MyKad number,
  address or phone number, and the giving side never asks an amount. Only
  the language, the look and the light/dark choice are remembered in the
  browser.
