# 📋 Guía de Implementación GTM - Semana 1
## Tracking Básico para Alexandra Palacios Logopeda

### 🎯 Objetivo de la Semana 1
Implementar el tracking esencial de conversiones: WhatsApp, teléfono, email y comportamiento básico del usuario.

---

## 📝 Preparación Inicial

### Requisitos
- [ ] Acceso a Google Tag Manager (GTM)
- [ ] Acceso a Google Analytics 4 (GA4)
- [ ] Tu ID de medición GA4 (formato: G-XXXXXXXXX)
- [ ] 30-45 minutos para la implementación

### URLs importantes
- GTM: https://tagmanager.google.com
- GA4: https://analytics.google.com
- Tu web: https://alexandra-palacios.com

---

## 🔧 Paso 1: Configurar Variables Integradas

1. **Accede a GTM** → Ve a tu contenedor `GTM-P6GK3SH8`

2. **Click en "Variables"** (menú izquierdo)

3. **En la sección "Variables integradas"** → Click en **"Configurar"**

4. **Activa las siguientes casillas:**
   - ✅ **Clics**
     - Click Element
     - Click Classes
     - Click ID
     - Click Target
     - Click URL
     - Click Text
   - ✅ **Páginas**
     - Page URL
     - Page Path
     - Page Hostname
   - ✅ **Desplazamiento**
     - Scroll Depth Threshold
     - Scroll Depth Units
     - Scroll Direction

5. **Click en la X** para cerrar

---

## 🎯 Paso 2: Crear Activadores de Conversión

### A) Activador WhatsApp (Más Importante) 🟢

1. **Ve a "Activadores"** → **"Nuevo"**

2. **Configuración del activador:**
   ```
   Nombre: WhatsApp - Todos los Clicks
   
   Tipo de activador: Click - Solo enlaces
   
   Este activador se activa en: Algunos clics en enlaces
   
   Condiciones:
   Click URL → contiene → wa.me
   ```

3. **Guardar** ✓

### B) Activador Teléfono 📞

1. **"Activadores"** → **"Nuevo"**

2. **Configuración:**
   ```
   Nombre: Teléfono - Clicks
   
   Tipo de activador: Click - Solo enlaces
   
   Este activador se activa en: Algunos clics en enlaces
   
   Condiciones:
   Click URL → contiene → tel:
   ```

3. **Guardar** ✓

### C) Activador Email 📧

1. **"Activadores"** → **"Nuevo"**

2. **Configuración:**
   ```
   Nombre: Email - Clicks
   
   Tipo de activador: Click - Solo enlaces
   
   Este activador se activa en: Algunos clics en enlaces
   
   Condiciones:
   Click URL → contiene → mailto:
   ```

3. **Guardar** ✓

### D) Activador Scroll Tracking 📜

1. **"Activadores"** → **"Nuevo"**

2. **Configuración:**
   ```
   Nombre: Scroll - Profundidad
   
   Tipo de activador: Profundidad de desplazamiento
   
   Porcentajes verticales: 25,50,75,90
   (escribir los números separados por comas)
   
   Activar este activador: Una vez por página
   ```

3. **Guardar** ✓

---

## 📊 Paso 3: Configurar Google Analytics 4

### Etiqueta de Configuración Principal

1. **Ve a "Etiquetas"** → **"Nueva"**

2. **Nombre:** `GA4 - Configuración`

3. **Configuración de la etiqueta:**
   - Click en el lápiz de "Configuración de la etiqueta"
   - Seleccionar: **"Google Analytics: Configuración de GA4"**
   - **ID de medición:** `G-XXXXXXXXX` (tu ID real de GA4)

4. **Activación:**
   - Click en el lápiz de "Activación"
   - Seleccionar: **"All Pages"**

5. **Guardar** ✓

---

## 📈 Paso 4: Crear Etiquetas de Eventos

### A) Evento WhatsApp Click 🟢

1. **"Etiquetas"** → **"Nueva"**

2. **Configuración completa:**
   ```
   Nombre: GA4 - WhatsApp Click
   
   Configuración de la etiqueta:
   Tipo: Google Analytics: Evento de GA4
   Etiqueta de configuración: {{GA4 - Configuración}}
   Nombre del evento: whatsapp_click
   
   Parámetros del evento:
   - Nombre: link_text    | Valor: {{Click Text}}
   - Nombre: link_url     | Valor: {{Click URL}}
   - Nombre: page_location| Valor: {{Page Path}}
   
   Activación: WhatsApp - Todos los Clicks
   ```

3. **Guardar** ✓

### B) Evento Phone Click 📞

1. **"Etiquetas"** → **"Nueva"**

2. **Configuración:**
   ```
   Nombre: GA4 - Phone Click
   
   Configuración de la etiqueta:
   Tipo: Google Analytics: Evento de GA4
   Etiqueta de configuración: {{GA4 - Configuración}}
   Nombre del evento: phone_click
   
   Parámetros del evento:
   - Nombre: phone_number | Valor: {{Click URL}}
   - Nombre: link_text    | Valor: {{Click Text}}
   - Nombre: page_location| Valor: {{Page Path}}
   
   Activación: Teléfono - Clicks
   ```

3. **Guardar** ✓

### C) Evento Email Click 📧

1. **"Etiquetas"** → **"Nueva"**

2. **Configuración:**
   ```
   Nombre: GA4 - Email Click
   
   Configuración de la etiqueta:
   Tipo: Google Analytics: Evento de GA4
   Etiqueta de configuración: {{GA4 - Configuración}}
   Nombre del evento: email_click
   
   Parámetros del evento:
   - Nombre: email_address| Valor: {{Click URL}}
   - Nombre: page_location| Valor: {{Page Path}}
   
   Activación: Email - Clicks
   ```

3. **Guardar** ✓

### D) Evento Scroll 📜

1. **"Etiquetas"** → **"Nueva"**

2. **Configuración:**
   ```
   Nombre: GA4 - Scroll Tracking
   
   Configuración de la etiqueta:
   Tipo: Google Analytics: Evento de GA4
   Etiqueta de configuración: {{GA4 - Configuración}}
   Nombre del evento: scroll
   
   Parámetros del evento:
   - Nombre: percent_scrolled | Valor: {{Scroll Depth Threshold}}
   
   Activación: Scroll - Profundidad
   ```

3. **Guardar** ✓

---

## 🧪 Paso 5: Probar la Implementación

### Modo Vista Previa

1. **Click en "Vista previa"** (botón azul arriba a la derecha)

2. **Ingresa tu URL:** `https://alexandra-palacios.com`

3. **Click en "Connect"**

### Pruebas a Realizar

1. **Test WhatsApp:**
   - Click en "Reservar Consulta Ahora"
   - En GTM Preview: Verificar que aparece `GA4 - WhatsApp Click`
   - Tags Fired: debe mostrar el evento

2. **Test Teléfono:**
   - Click en el número 614 41 75 13
   - Verificar evento `GA4 - Phone Click`

3. **Test Email:**
   - Click en alexandrapz.logopeda@gmail.com
   - Verificar evento `GA4 - Email Click`

4. **Test Scroll:**
   - Hacer scroll hasta el final de la página
   - Verificar eventos de scroll en 25%, 50%, 75%, 90%

### Verificar en GA4 en Tiempo Real

1. Abre GA4 → **Informes** → **Tiempo real**
2. Realiza las acciones en tu web
3. Verifica que aparecen los eventos:
   - `whatsapp_click`
   - `phone_click`
   - `email_click`
   - `scroll`

---

## 🚀 Paso 6: Publicar Cambios

### Si todo funciona correctamente:

1. **Vuelve a GTM**

2. **Click en "Enviar"** (botón azul arriba a la derecha)

3. **Configuración de publicación:**
   ```
   Nombre de la versión: Tracking Básico Semana 1 - Conversiones
   
   Descripción: 
   - WhatsApp tracking
   - Phone tracking
   - Email tracking
   - Scroll tracking
   - GA4 configuración base
   ```

4. **Click en "Publicar"**

---

## ✅ Checklist Final Semana 1

- [ ] Variables integradas configuradas
- [ ] 4 Activadores creados (WhatsApp, Phone, Email, Scroll)
- [ ] GA4 Configuración instalada
- [ ] 4 Eventos de conversión configurados
- [ ] Pruebas realizadas en modo Preview
- [ ] Eventos visibles en GA4 Tiempo Real
- [ ] Cambios publicados en GTM

---

## 📊 Métricas a Revisar (Después de 1 Semana)

### En GA4 ve a: Informes → Engagement → Eventos

Podrás ver:
- **Total de clicks en WhatsApp** (conversión principal)
- **Total de llamadas telefónicas**
- **Clicks en email**
- **Comportamiento de scroll** (¿leen todo el contenido?)

### Preguntas que podrás responder:
1. ¿Cuál es el método de contacto preferido?
2. ¿Desde qué sección contactan más?
3. ¿Los usuarios leen todo el contenido?
4. ¿Qué porcentaje de visitantes contacta?

---

## 🎯 Próximos Pasos (Semana 2)

Una vez tengas datos de la Semana 1, implementaremos:
- Tracking específico por servicio
- Tracking de interés en precios
- Eventos personalizados por sección
- Audiencias de remarketing

---

## ❓ Troubleshooting

### Si no ves eventos en GTM Preview:
1. Asegúrate de tener el modo Preview activo
2. Limpia caché del navegador
3. Verifica que el ID GTM-P6GK3SH8 esté correcto en tu web

### Si no ves eventos en GA4:
1. Verifica que el ID de medición sea correcto
2. Espera 1-2 minutos (puede haber retraso)
3. Revisa en Tiempo Real, no en informes históricos

### Soporte:
- GTM Help: https://support.google.com/tagmanager
- GA4 Help: https://support.google.com/analytics

---

¡Éxito con la implementación! 🚀