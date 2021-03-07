# Women in STEM Achievements API

This is an API that allows you to get information about women's accomplishments in the STEM field!

## Installation and Setup

First, clone this project.

Then, in your console, run `pip install -r requirements.txt`

Then type in the console `export FLASK_APP=app.py`.
On Windows use `set` instead of `export`.

Now, cd into the `web/` directory and run `npm install`.

## Running the project

To run the API, in your console in the root of this project, type `flask run`.

To run the web client, cd into `web/` and run `npm start`.

## Usage

To get data from the API, create a `GET` request at route `/achievements`. You may also define additional query parameters such as `date`, `name`, `start_date`, `end_date`, and more!

Our web client interfaces with our API! Go to `http://localhost:5000` to see it in action!
