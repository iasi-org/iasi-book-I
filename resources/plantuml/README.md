# Librería PlantUML de IASI

Esta carpeta contiene el lenguaje visual común de **Ingeniería Asistida por Sistemas Inteligentes (IASI)**.

## Estructura

```text
resources/
└── plantuml/
    ├── iasi.puml
    └── examples/
        └── knowledge-flow.puml
```

## Uso

Incluya la librería desde el diagrama:

```plantuml
@startuml

!include ../iasi.puml

IASI_KNOWLEDGE(Inputs, "Inputs")
IASI_PROCESS(OpenSpec, "OpenSpec")
IASI_FLOW(Inputs, OpenSpec)

@enduml
```

Ajuste la ruta relativa del `!include` según la ubicación del diagrama.

## Elementos semánticos

```plantuml
IASI_KNOWLEDGE(alias, "Etiqueta")
IASI_PROCESS(alias, "Etiqueta")
IASI_SPEC(alias, "Etiqueta")
IASI_IMPLEMENTATION(alias, "Etiqueta")
IASI_VERIFICATION(alias, "Etiqueta")
IASI_EVIDENCE(alias, "Etiqueta")
IASI_DECISION(alias, "Etiqueta")
IASI_EXTERNAL(alias, "Etiqueta")
IASI_WARNING(alias, "Etiqueta")
```

## Relaciones

```plantuml
IASI_FLOW(origen, destino)
IASI_FLOW_LABELED(origen, destino, "Etiqueta")

IASI_FEEDBACK(origen, destino)
IASI_FEEDBACK_LABELED(origen, destino, "Etiqueta")

IASI_TRACE(origen, destino)
IASI_TRACE_LABELED(origen, destino, "Etiqueta")

IASI_DEPENDS(origen, destino)
IASI_DEPENDS_LABELED(origen, destino, "Etiqueta")
```

## Convenciones iniciales

- Dirección vertical por defecto.
- Flechas ortogonales.
- Fondo transparente.
- Sin sombras.
- Tipografía Segoe UI.
- El color comunica significado, pero nunca será el único mecanismo de interpretación.
- Los diagramas deberán mantener el flujo principal de arriba abajo.
