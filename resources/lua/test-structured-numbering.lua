local target = "chapters/12-conceptos/01-sistema_inteligente.qmd"
local chapter = 1
local counters = {}

local function is_target()
  local input = quarto.doc.input_file or ""
  input = input:gsub("\\", "/")

  return input:sub(-#target) == target
end

local function replace_chapter_number(inlines)
  if not inlines then
    return inlines
  end

  return inlines:walk({
    Span = function(span)
      if span.classes:includes("chapter-number") then
        span.content = { pandoc.Str(tostring(chapter)) }
      end

      return span
    end
  })
end

function Meta(meta)
  if not is_target() then
    return meta
  end

  meta.title = replace_chapter_number(meta.title)

  return meta
end

function Header(header)
  if not is_target() then
    return header
  end

  if header.level < 2 then
    return header
  end

  counters[header.level] = (counters[header.level] or 0) + 1

  for level = header.level + 1, 6 do
    counters[level] = nil
  end

  local number = { tostring(chapter) }

  for level = 2, header.level do
    table.insert(number, tostring(counters[level] or 0))
  end

  header.classes:insert("unnumbered")

  header.content:insert(1, pandoc.Space())
  header.content:insert(1, pandoc.Str(table.concat(number, ".")))

  return header
end