export default {
  async fetch(request, env, ctx) {
    const TARGET_URL = "https://146n.cc"; 

    const targetData = {
      target_url: TARGET_URL
    };
    
    return new Response(JSON.stringify(targetData), {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
      }
    });
  }
};
