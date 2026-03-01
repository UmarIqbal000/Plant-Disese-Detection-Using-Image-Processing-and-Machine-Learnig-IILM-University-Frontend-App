import { Client } from "@gradio/client";

const HF_SPACE_URL = "https://umariqbal000-plant-diease-detection-using-image-e7086f7.hf.space/";

let client = null;

async function getClient() {
  if (!client) {
    client = await Client.connect(HF_SPACE_URL);
  }
  return client;
}

export async function predictDisease(imageFile) {
  try {
    const gradioClient = await getClient();

    const result = await gradioClient.predict("/predict", {
      image: imageFile,
    });

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("Prediction error:", error);
    return {
      success: false,
      error: error.message || "Failed to get prediction",
    };
  }
}
