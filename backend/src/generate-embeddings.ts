
import { pipeline } from "@xenova/transformers";

export async function getExtractor() {
    let extractorPromise: Promise<any> | null = null;
    if (!extractorPromise) {
      extractorPromise = pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
    }
    return extractorPromise;
  }


  export async function generateEmbedding(text: string): Promise<number[]> {
    const extractor = await getExtractor();
    const output = await extractor(text, {
      pooling: "mean",
      normalize: true,
    });
  
    return Array.from(output.data);
  }

 async function main(){
  const output=await generateEmbedding("react is my fav");
    console.log(output.slice(0,5));
    console.log(output.length);
  }
  
  