// <auto-generated>
/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

#nullable enable

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// OuterComposite
    /// </summary>
    public partial class OuterComposite : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OuterComposite" /> class.
        /// </summary>
        /// <param name="myBoolean">myBoolean</param>
        /// <param name="myNumber">myNumber</param>
        /// <param name="myString">myString</param>
        [JsonConstructor]
        public OuterComposite(bool myBoolean, decimal myNumber, string? myString = default)
        {
            MyBoolean = myBoolean;
            MyNumber = myNumber;
            MyString = myString;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Gets or Sets MyBoolean
        /// </summary>
        [JsonPropertyName("my_boolean")]
        public bool MyBoolean { get; set; }

        /// <summary>
        /// Gets or Sets MyNumber
        /// </summary>
        [JsonPropertyName("my_number")]
        public decimal MyNumber { get; set; }

        /// <summary>
        /// Gets or Sets MyString
        /// </summary>
        [JsonPropertyName("my_string")]
        public string? MyString { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public Dictionary<string, JsonElement> AdditionalProperties { get; } = new Dictionary<string, JsonElement>();

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OuterComposite {\n");
            sb.Append("  MyBoolean: ").Append(MyBoolean).Append("\n");
            sb.Append("  MyNumber: ").Append(MyNumber).Append("\n");
            sb.Append("  MyString: ").Append(MyString).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// A Json converter for type OuterComposite
    /// </summary>
    public class OuterCompositeJsonConverter : JsonConverter<OuterComposite>
    {
        /// <summary>
        /// A Json reader.
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override OuterComposite Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            bool? myBoolean = default;
            decimal? myNumber = default;
            string? myString = default;

            while (utf8JsonReader.Read())
            {
                if (startingTokenType == JsonTokenType.StartObject && utf8JsonReader.TokenType == JsonTokenType.EndObject && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (startingTokenType == JsonTokenType.StartArray && utf8JsonReader.TokenType == JsonTokenType.EndArray && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (utf8JsonReader.TokenType == JsonTokenType.PropertyName && currentDepth == utf8JsonReader.CurrentDepth - 1)
                {
                    string? propertyName = utf8JsonReader.GetString();
                    utf8JsonReader.Read();

                    switch (propertyName)
                    {
                        case "my_boolean":
                            if (utf8JsonReader.TokenType != JsonTokenType.Null)
                                myBoolean = utf8JsonReader.GetBoolean();
                            break;
                        case "my_number":
                            if (utf8JsonReader.TokenType != JsonTokenType.Null)
                                myNumber = utf8JsonReader.GetDecimal();
                            break;
                        case "my_string":
                            myString = utf8JsonReader.GetString();
                            break;
                        default:
                            break;
                    }
                }
            }

            if (myNumber == null)
                throw new ArgumentNullException(nameof(myNumber), "Property is required for class OuterComposite.");

            if (myString == null)
                throw new ArgumentNullException(nameof(myString), "Property is required for class OuterComposite.");

            if (myBoolean == null)
                throw new ArgumentNullException(nameof(myBoolean), "Property is required for class OuterComposite.");

            return new OuterComposite(myBoolean.Value, myNumber.Value, myString);
        }

        /// <summary>
        /// A Json writer
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="outerComposite"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, OuterComposite outerComposite, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            writer.WriteBoolean("my_boolean", outerComposite.MyBoolean);
            writer.WriteNumber("my_number", outerComposite.MyNumber);
            writer.WriteString("my_string", outerComposite.MyString);

            writer.WriteEndObject();
        }
    }
}
