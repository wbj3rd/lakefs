# Welcome to lakeFS 👋
![Version](https://img.shields.io/badge/version-1.0.18-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> The lakeFS open source project for data lakes enables zero copy Dev \ Test isolated environments, continuous quality validation, atomic rollback on bad data, reproducibility, and more. This a node wrapper to help you connect and upload files to your lakeFS instance.

## Install

```sh
npm install lakefs
```

## Usage

```sh
import {lakeFS} from 'lakefs';
let lakefs = lakeFS
lakefs({profile: 'local'}, 'call-center2', "http://localhost:8000", "public")
Variables
profile: your aws/lakeFS profile
bucket: your desired bucket
host: the host of your lakeFS instance
privacy: public or private

pass this object to your request handler and it will grab the file and upload it to your bucket!
```

## Run tests

```sh
npm run test
```

## Author

👤 **Walter Johnson**

* Github: [@wbj3rd](https://github.com/wbj3rd)
* LinkedIn: [@fullstack-walter-johnson](https://linkedin.com/in/fullstack-walter-johnson)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_