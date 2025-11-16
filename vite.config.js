export default {
  server: {
    host: true,
    allowedHosts: ['.paypilotgo.com'],
    hmr: {
      clientPort: 443
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
}
