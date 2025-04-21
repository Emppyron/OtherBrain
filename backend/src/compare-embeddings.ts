interface ContentTypes{
        title:String,
        link:String,
        description:String,
        type:String,
        userId:string,
        embedding:[number]
}


function cosineSimilarity(vec1: number[], vec2: number[]): number {
    const dotProduct = vec1.reduce((sum, v, i) => sum + v * vec2[i], 0);
    const magnitude1 = Math.sqrt(vec1.reduce((sum, v) => sum + v * v, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((sum, v) => sum + v * v, 0));
    return dotProduct / (magnitude1 * magnitude2);
  }

 export function getTopResults(queryEmbedding: number[], allContents: any[]): any[] {
    const scored = allContents.map((item) => {
        const { embedding, ...rest } = item.toObject(); 
        const score = cosineSimilarity(queryEmbedding, embedding);
        return { ...rest, score };
      });
      
  
    const topResults = scored
      .sort((a, b) => b.score - a.score) 
      .slice(0, 5); 
  
    return topResults;
  }  