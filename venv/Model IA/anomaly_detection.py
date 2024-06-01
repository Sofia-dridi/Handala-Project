import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense
import numpy as np

# Load your data
data = pd.read_csv('your_data.csv')

# Preprocess your data
data_normalized = (data - data.mean()) / data.std()
train_data, test_data = train_test_split(data_normalized, test_size=0.2, random_state=42)

# Define the Autoencoder model
def build_model(input_dim):
    encoding_dim = 14
    input_layer = Input(shape=(input_dim,))
    encoder = Dense(encoding_dim, activation="relu")(input_layer)
    encoder = Dense(int(encoding_dim / 2), activation="relu")(encoder)
    encoder = Dense(int(encoding_dim / 4), activation="relu")(encoder)
    decoder = Dense(int(encoding_dim / 2), activation='relu')(encoder)
    decoder = Dense(encoding_dim, activation='relu')(decoder)
    decoder = Dense(input_dim, activation='sigmoid')(decoder)
    autoencoder = Model(inputs=input_layer, outputs=decoder)
    autoencoder.compile(optimizer='adam', loss='mean_squared_error')
    return autoencoder

input_dim = train_data.shape[1]
model = build_model(input_dim)

model.fit(train_data, train_data,
          epochs=50,
          batch_size=256,
          shuffle=True,
          validation_split=0.2,
          verbose=1)

model.save('anomaly_detection_model.h5')

loss = model.evaluate(test_data, test_data)
print(f'Test loss: {loss}')

model = tf.keras.models.load_model('anomaly_detection_model.h5')

new_data = pd.read_csv('new_data.csv')
new_data_normalized = (new_data - data.mean()) / data.std()
predictions = model.predict(new_data_normalized)
reconstruction_errors = np.mean(np.abs(predictions - new_data_normalized), axis=1)
threshold = np.percentile(reconstruction_errors, 95)
anomalies = reconstruction_errors > threshold
print(f'Anomalies detected: {np.sum(anomalies)}')