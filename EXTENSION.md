# Prueba Técnica

## 🧠 Sección de Extensión (obligatorio)

Si mañana necesitáramos permitir que una solicitud de pago incluya múltiples ítems (como una factura con más de un concepto), ¿cómo adaptarías tu solución actual sin reescribirla por completo?

---

## Respuesta

La solución actual se puede extender sin romper nada. Lo haría así:

### 🧱 Estructura de Datos

- Mantengo los campos actuales (`description`, `first_total`) para compatibilidad.
- Agrego un array de `items` con descripción, cantidad, precio unitario y subtotal.
- El total general se calcula automáticamente a partir de los ítems.

### ✅ Validación

- Uso Valibot para validar cada ítem individual.
- El esquema general valida que haya al menos un ítem cargado.

### 🧠 Estado y Funcionalidad

- Amplío el store para manejar ítems: agregar, editar, borrar.
- Totales se recalculan automáticamente al modificar ítems.

### 💻 UI

- Componente reutilizable para cada ítem.

- Mostrar resumen de totales en tiempo real.

### 🧩 Ventajas

- No rompe nada de lo existente.
- Permite crecer hacia funcionalidades más complejas.
- Fácil de mantener y escalar.

### ⚙️ Consideraciones

- Hacerlo en fases.
- Testing para no romper lo que ya funciona.
- Documentar cambios.
- Cuidar performance de cálculos y renders.

En resumen, es una mejora evolutiva sobre lo que ya está hecho. La estructura con React Hook Form, Zustand y Valibot lo hace bastante simple de implementar.
