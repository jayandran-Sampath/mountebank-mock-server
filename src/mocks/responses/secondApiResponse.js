function secondApiResponse(config) {
    console.log(config)
    config.logger.info('origin called');
    config.state.requests = config.state.requests || 0;
    config.state.requests += 1;
    return {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ count: config.state.requests })
    } 
}