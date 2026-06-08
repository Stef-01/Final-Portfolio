"""Headless Blender: import an OBJ and export a Draco-compressed GLB.

Usage:
  blender --background --python scripts/obj-to-glb.py -- <in.obj> <out.glb>
"""
import sys
import bpy

argv = sys.argv[sys.argv.index("--") + 1:]
src, dst = argv[0], argv[1]

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.obj_import(filepath=src)

meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
print("imported mesh objects:", len(meshes))
if meshes:
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()
    joined = bpy.context.view_layer.objects.active
    # Shade smooth so the strands read as solid tubes, not faceted.
    bpy.ops.object.shade_smooth()
    print("verts:", len(joined.data.vertices), "polys:", len(joined.data.polygons))

bpy.ops.export_scene.gltf(
    filepath=dst,
    export_format="GLB",
    export_apply=True,
    export_yup=True,
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6,
)
print(f"[obj-to-glb] exported {dst}")
