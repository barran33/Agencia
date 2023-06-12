#!/bin/bash

#Exit on error
set -o errexit

pip3 install -r requirements.txt

python3 manage.py collectstatic --no-input

# python manage.py migrate