import pandas as pd
from io import BytesIO

def process_excel(file):
    contents = file.file.read()
    df = pd.read_excel(BytesIO(contents), engine='openpyxl')
    text_data = df.to_string(index=False)
    return text_data
