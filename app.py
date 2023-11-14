from object_detection.logger import logging
from object_detection.exception import AppException
import sys

try:
    a = 3/ "s"

except Exception as e:
    raise AppException(e, sys)