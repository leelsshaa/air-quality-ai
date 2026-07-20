import time

# Dictionary to store cached values
cache = {}

# Cache duration (10 minutes)
CACHE_TIME = 600


def get_cached(aqi):
    """
    Returns cached advice if it exists and hasn't expired.
    """

    if aqi in cache:
        value, timestamp = cache[aqi]

        if time.time() - timestamp < CACHE_TIME:
            return value

    return None


def save_cache(aqi, advice):
    """
    Saves health advice to cache.
    """

    cache[aqi] = (
        advice,
        time.time()
    )