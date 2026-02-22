# Screen comparison: Original vs Recreated

## Original screen structure (Wrapper - Desktop IMSG)

### Layout (nested)

```
Wrapper (1440×1024)
├── SideNavBar (IMSG)          [0, 0]        84×1024   ← LEFT SIDEBAR
├── First level container      [84, 0]       1189×1024
│   ├── TopNavBar - Desktop    [0, 0]        1189×66   ← TOP BAR
│   └── Second level container [0, 66]       1189×958
│       ├── Subnavigation      [0, 0]        192×958   ← LEFT SUBNAV
│       └── Third level        [0, 0]        1189×958
│           ├── HeaderAreaWithBreadcrumb [48, 24]  1093×317
│           │   ├── SecondaryBreadcrumb
│           │   ├── Title area and actions
│           │   └── PrimaryTabs (IMSG)
│           └── Content Container          [48, 377]  1093×545
│               └── Placeholder (card content)
└── Overlays
```

### Key positions (content area)

- Content area left edge: **276px** (84 sidebar + 192 subnav)
- Content area top: **66px** (below top bar)
- Breadcrumb: **(48, 24)** inside content area → **absolute (324, 90)**
- Title + actions: **(0, 56)** inside header → **absolute (324, 122)**
- Tabs: **(0, 273)** inside header → **absolute (324, 339)**
- Main content (card): **(48, 377)** → **absolute (324, 443)**

---

## Recreated screen (current)

### Layout (flat – wrong)

```
Wrapper (Recreated) (1440×1024)
├── Breadcrumb       [24, 24]      167×16
├── Card             [24, 300]    720×564
├── Button 1–4       [800, 60]    81×40 each
├── Primary Button   [1240, 60]   81×40
├── Data point       [24, 200]    (text)
├── Status Value 1–3 [24/174/324, 230]  100×32
└── (no Page title, no Description text in structure we got)
```

### What’s missing vs original

| Component / area    | Original                                 | Recreated                                    |
| ------------------- | ---------------------------------------- | -------------------------------------------- |
| SideNavBar          | ✓ 84×1024                                | ✗ Missing                                    |
| TopNavBar           | ✓ 1189×66                                | ✗ Missing                                    |
| Subnavigation       | ✓ 192×958                                | ✗ Missing                                    |
| Layout structure    | Nested (sidebar \| main \| content)      | Flat frame                                   |
| Breadcrumb position | Inside header at (48,24) in content area | At (24,24) in full frame                     |
| Title + actions row | In HeaderArea, with buttons on right     | Buttons only, no title row                   |
| PrimaryTabs         | ✓ In header area                         | ✗ (we added Tab frames but not as component) |
| Content container   | 1093×545 at (48,377)                     | Card at (24,300), different size             |
| Page title text     | In “Title area and actions”              | Missing / not in same place                  |
| Description text    | In title area                            | Missing in captured structure                |

### Layout differences

1. **No sidebar** – content should start at x=276, not x=24.
2. **No top bar** – content should start at y=66, not y=0.
3. **No subnav** – content area width should be 1093, not full width.
4. **Breadcrumb** – should be at (324, 90) [i.e. 276+48, 66+24], not (24, 24).
5. **Title + actions** – should be one row: title left, buttons right, in a dedicated header area.
6. **Tabs** – should be a PrimaryTabs instance in the header, not plain frames.
7. **Card/content** – should be at (324, 443), width 1093, height 545 (or match content container).

---

## Next steps (recreate to match)

1. Build same **nested layout**: SideNavBar (or placeholder) | Main (TopNavBar + (Subnav | Content)).
2. In content area: HeaderArea (Breadcrumb, Title+actions, PrimaryTabs) then Content container with Card.
3. Use **positions** above for breadcrumb, title row, tabs, and card.
4. Use **file components** where they exist (Breadcrumb, Button, Card, Text); use **placeholder frames** for SideNavBar, TopNavBar, Subnavigation, PrimaryTabs if not in file.

---

## Update: Recreated screen rebuilt (same layout)

The recreated screen was rebuilt to match the original layout:

- **SideNavBar (placeholder)** – 84×1024, left
- **First level container** – TopNavBar (placeholder) 1356×66 + Second level
- **Second level** – Subnavigation (placeholder) 192×958 + Third level (content)
- **Third level** – HeaderAreaWithBreadcrumb (48,24) + Content Container (48,377)
- **Header area** – Breadcrumb, Title area and actions (page title, description, data points, status values, 5 buttons), PrimaryTabs (placeholder)
- **Content container** – Card (lg, content) from file

Components from this file used: **Breadcrumb**, **Button** (secondary ×4, primary ×1), **Card**. Placeholders used for SideNavBar, TopNavBar, Subnavigation, PrimaryTabs.
