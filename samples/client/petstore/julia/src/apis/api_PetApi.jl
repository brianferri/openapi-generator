# This file was generated by the Julia OpenAPI Code Generator
# Do not modify this file directly. Modify the OpenAPI specification instead.

struct PetApi <: OpenAPI.APIClientImpl
    client::OpenAPI.Clients.Client
end

"""
The default API base path for APIs in `PetApi`.
This can be used to construct the `OpenAPI.Clients.Client` instance.
"""
basepath(::Type{ PetApi }) = "http://petstore.swagger.io/v2"

const _returntypes_add_pet_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => Pet,
    Regex("^" * replace("405", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_add_pet(_api::PetApi, pet::Pet; _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "POST", _returntypes_add_pet_PetApi, "/pet", ["petstore_auth", ], pet)
    OpenAPI.Clients.set_header_accept(_ctx, ["application/xml", "application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? ["application/json", "application/xml", ] : [_mediaType])
    return _ctx
end

@doc raw"""Add a new pet to the store



Params:
- pet::Pet (required)

Return: Pet, OpenAPI.Clients.ApiResponse
"""
function add_pet(_api::PetApi, pet::Pet; _mediaType=nothing)
    _ctx = _oacinternal_add_pet(_api, pet; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function add_pet(_api::PetApi, response_stream::Channel, pet::Pet; _mediaType=nothing)
    _ctx = _oacinternal_add_pet(_api, pet; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_delete_pet_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("400", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_delete_pet(_api::PetApi, pet_id::Int64; api_key=nothing, _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "DELETE", _returntypes_delete_pet_PetApi, "/pet/{petId}", ["petstore_auth", ])
    OpenAPI.Clients.set_param(_ctx.path, "petId", pet_id)  # type Int64
    OpenAPI.Clients.set_param(_ctx.header, "api_key", api_key)  # type String
    OpenAPI.Clients.set_header_accept(_ctx, [])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? [] : [_mediaType])
    return _ctx
end

@doc raw"""Deletes a pet



Params:
- pet_id::Int64 (required)
- api_key::String

Return: Nothing, OpenAPI.Clients.ApiResponse
"""
function delete_pet(_api::PetApi, pet_id::Int64; api_key=nothing, _mediaType=nothing)
    _ctx = _oacinternal_delete_pet(_api, pet_id; api_key=api_key, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function delete_pet(_api::PetApi, response_stream::Channel, pet_id::Int64; api_key=nothing, _mediaType=nothing)
    _ctx = _oacinternal_delete_pet(_api, pet_id; api_key=api_key, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_find_pets_by_status_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => Vector{Pet},
    Regex("^" * replace("400", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_find_pets_by_status(_api::PetApi, status::Vector{String}; _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "GET", _returntypes_find_pets_by_status_PetApi, "/pet/findByStatus", ["petstore_auth", ])
    OpenAPI.Clients.set_param(_ctx.query, "status", status; style="form", is_explode=false)  # type Vector{String}
    OpenAPI.Clients.set_header_accept(_ctx, ["application/xml", "application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? [] : [_mediaType])
    return _ctx
end

@doc raw"""Finds Pets by status

Multiple status values can be provided with comma separated strings

Params:
- status::Vector{String} (required)

Return: Vector{Pet}, OpenAPI.Clients.ApiResponse
"""
function find_pets_by_status(_api::PetApi, status::Vector{String}; _mediaType=nothing)
    _ctx = _oacinternal_find_pets_by_status(_api, status; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function find_pets_by_status(_api::PetApi, response_stream::Channel, status::Vector{String}; _mediaType=nothing)
    _ctx = _oacinternal_find_pets_by_status(_api, status; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_find_pets_by_tags_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => Vector{Pet},
    Regex("^" * replace("400", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_find_pets_by_tags(_api::PetApi, tags::Vector{String}; _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "GET", _returntypes_find_pets_by_tags_PetApi, "/pet/findByTags", ["petstore_auth", ])
    OpenAPI.Clients.set_param(_ctx.query, "tags", tags; style="form", is_explode=false)  # type Vector{String}
    OpenAPI.Clients.set_header_accept(_ctx, ["application/xml", "application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? [] : [_mediaType])
    return _ctx
end

@doc raw"""Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

Params:
- tags::Vector{String} (required)

Return: Vector{Pet}, OpenAPI.Clients.ApiResponse
"""
function find_pets_by_tags(_api::PetApi, tags::Vector{String}; _mediaType=nothing)
    _ctx = _oacinternal_find_pets_by_tags(_api, tags; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function find_pets_by_tags(_api::PetApi, response_stream::Channel, tags::Vector{String}; _mediaType=nothing)
    _ctx = _oacinternal_find_pets_by_tags(_api, tags; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_get_pet_by_id_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => Pet,
    Regex("^" * replace("400", "x"=>".") * "\$") => Nothing,
    Regex("^" * replace("404", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_get_pet_by_id(_api::PetApi, pet_id::Int64; _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "GET", _returntypes_get_pet_by_id_PetApi, "/pet/{petId}", ["api_key", ])
    OpenAPI.Clients.set_param(_ctx.path, "petId", pet_id)  # type Int64
    OpenAPI.Clients.set_header_accept(_ctx, ["application/xml", "application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? [] : [_mediaType])
    return _ctx
end

@doc raw"""Find pet by ID

Returns a single pet

Params:
- pet_id::Int64 (required)

Return: Pet, OpenAPI.Clients.ApiResponse
"""
function get_pet_by_id(_api::PetApi, pet_id::Int64; _mediaType=nothing)
    _ctx = _oacinternal_get_pet_by_id(_api, pet_id; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function get_pet_by_id(_api::PetApi, response_stream::Channel, pet_id::Int64; _mediaType=nothing)
    _ctx = _oacinternal_get_pet_by_id(_api, pet_id; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_update_pet_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => Pet,
    Regex("^" * replace("400", "x"=>".") * "\$") => Nothing,
    Regex("^" * replace("404", "x"=>".") * "\$") => Nothing,
    Regex("^" * replace("405", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_update_pet(_api::PetApi, pet::Pet; _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "PUT", _returntypes_update_pet_PetApi, "/pet", ["petstore_auth", ], pet)
    OpenAPI.Clients.set_header_accept(_ctx, ["application/xml", "application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? ["application/json", "application/xml", ] : [_mediaType])
    return _ctx
end

@doc raw"""Update an existing pet



Params:
- pet::Pet (required)

Return: Pet, OpenAPI.Clients.ApiResponse
"""
function update_pet(_api::PetApi, pet::Pet; _mediaType=nothing)
    _ctx = _oacinternal_update_pet(_api, pet; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function update_pet(_api::PetApi, response_stream::Channel, pet::Pet; _mediaType=nothing)
    _ctx = _oacinternal_update_pet(_api, pet; _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_update_pet_with_form_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("405", "x"=>".") * "\$") => Nothing,
)

function _oacinternal_update_pet_with_form(_api::PetApi, pet_id::Int64; name=nothing, status=nothing, _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "POST", _returntypes_update_pet_with_form_PetApi, "/pet/{petId}", ["petstore_auth", ])
    OpenAPI.Clients.set_param(_ctx.path, "petId", pet_id)  # type Int64
    OpenAPI.Clients.set_param(_ctx.form, "name", name)  # type String
    OpenAPI.Clients.set_param(_ctx.form, "status", status)  # type String
    OpenAPI.Clients.set_header_accept(_ctx, [])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? ["application/x-www-form-urlencoded", ] : [_mediaType])
    return _ctx
end

@doc raw"""Updates a pet in the store with form data



Params:
- pet_id::Int64 (required)
- name::String
- status::String

Return: Nothing, OpenAPI.Clients.ApiResponse
"""
function update_pet_with_form(_api::PetApi, pet_id::Int64; name=nothing, status=nothing, _mediaType=nothing)
    _ctx = _oacinternal_update_pet_with_form(_api, pet_id; name=name, status=status, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function update_pet_with_form(_api::PetApi, response_stream::Channel, pet_id::Int64; name=nothing, status=nothing, _mediaType=nothing)
    _ctx = _oacinternal_update_pet_with_form(_api, pet_id; name=name, status=status, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

const _returntypes_upload_file_PetApi = Dict{Regex,Type}(
    Regex("^" * replace("200", "x"=>".") * "\$") => ApiResponse,
)

function _oacinternal_upload_file(_api::PetApi, pet_id::Int64; additional_metadata=nothing, file=nothing, _mediaType=nothing)
    _ctx = OpenAPI.Clients.Ctx(_api.client, "POST", _returntypes_upload_file_PetApi, "/pet/{petId}/uploadImage", ["petstore_auth", ])
    OpenAPI.Clients.set_param(_ctx.path, "petId", pet_id)  # type Int64
    OpenAPI.Clients.set_param(_ctx.form, "additionalMetadata", additional_metadata)  # type String
    OpenAPI.Clients.set_param(_ctx.file, "file", file)  # type String
    OpenAPI.Clients.set_header_accept(_ctx, ["application/json", ])
    OpenAPI.Clients.set_header_content_type(_ctx, (_mediaType === nothing) ? ["multipart/form-data", ] : [_mediaType])
    return _ctx
end

@doc raw"""uploads an image



Params:
- pet_id::Int64 (required)
- additional_metadata::String
- file::String

Return: ApiResponse, OpenAPI.Clients.ApiResponse
"""
function upload_file(_api::PetApi, pet_id::Int64; additional_metadata=nothing, file=nothing, _mediaType=nothing)
    _ctx = _oacinternal_upload_file(_api, pet_id; additional_metadata=additional_metadata, file=file, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx)
end

function upload_file(_api::PetApi, response_stream::Channel, pet_id::Int64; additional_metadata=nothing, file=nothing, _mediaType=nothing)
    _ctx = _oacinternal_upload_file(_api, pet_id; additional_metadata=additional_metadata, file=file, _mediaType=_mediaType)
    return OpenAPI.Clients.exec(_ctx, response_stream)
end

export add_pet
export delete_pet
export find_pets_by_status
export find_pets_by_tags
export get_pet_by_id
export update_pet
export update_pet_with_form
export upload_file
