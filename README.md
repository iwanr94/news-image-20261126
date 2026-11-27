# news-image-20261126 — The World in One Page


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/iwanr94/news-image-20261126/blob/main/LICENSE)

[![GitHub repo size](https://img.shields.io/github/repo-size/iwanr94/news-image-20261126)](https://github.com/iwanr94/news-image-20261126)

[![GitHub last commit](https://img.shields.io/github/last-commit/iwanr94/news-image-20261126)](https://github.com/iwanr94/news-image-20261126/commits/main)

[![make.fun](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)

[![make.fun rank](https://make.fun/badge/news-image-20261126/iwanr94/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)

[![make.fun reward](https://make.fun/badge/news-image-20261126/iwanr94/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)


A single front-page image summing up Thursday 26 November 2026 in world news,
built for the make.fun bounty
[news-image-20261126](https://make.fun/bounty/news-image-20261126)
("Sum up 26 November's world news in one image", $100 total, top 50).

## The stories

- **Lead — HOUTHIS STRIKE SAUDI ARABIA'S BIGGEST REFINERY:** Yemen's Houthis
  say they attacked the Ras Tanura refinery, the kingdom's largest; satellite
  images show thick black smoke over the complex, and Brent crude jumps past
  $93 a barrel.
- **MINES BLAST TWO TANKERS IN HORMUZ:** Iran's Revolutionary Guards say two
  oil tankers hit naval mines in the Strait of Hormuz and caught fire in their
  engine rooms while on an unauthorised route.
- **FIRST PAKISTANI ASTRONAUT IN ORBIT:** Muhammad Zeeshan Ali flies aboard
  China's Shenzhou-24 to the Tiangong space station, the first foreign visitor
  to the station and the first Pakistani to reach orbit.
- **GARMENT PAY UP 36% AFTER WEEKS OF PROTEST:** Bangladesh lifts the minimum
  wage for garment workers to 17,000 taka a month after protests that shut
  factories; workers had demanded far more.
- **INDIA MARKS 18 YEARS SINCE 26/11 MUMBAI ATTACKS:** The nation remembers
  the 2008 attacks on the 18th anniversary, which falls on Constitution Day.
- **AUSTRALIA SIGNS PACIFIC SECURITY PACT:** Australia and Solomon Islands sign
  a landmark security treaty reshaping strategic relations in the Pacific.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

Reuters (Ras Tanura strike, Hormuz tankers, Brent crude), Xinhua / CMSA
(Shenzhou-24, Muhammad Zeeshan Ali), AP / Al Jazeera (Bangladesh garment wage),
ABC / AP (Australia–Solomon Islands treaty), school-assembly roundups
(26/11 anniversary, 26 Nov 2026).
