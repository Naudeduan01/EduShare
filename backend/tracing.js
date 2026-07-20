const { NodeSDK } = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");
const { PgInstrumentation } = require("@opentelemetry/instrumentation-pg");
const traceExporter = new OTLPTraceExporter({
    url: "http://jaeger:4318/v1/traces"
});
const sdk = new NodeSDK({
    serviceName: "edushare-backend",
    traceExporter,
    instrumentations: [
        getNodeAutoInstrumentations(),
        new PgInstrumentation()
    ]
});
sdk.start();
console.log("OpenTelemetry iniciado.");